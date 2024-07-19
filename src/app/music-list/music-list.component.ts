import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {CommonModule} from "@angular/common";
import axios from 'axios';


@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.less'
})
export class MusicListComponent {
  // 构造函数
  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  musicList: any; // 音乐列表数据
  page = 1; // 当前页数
  limit = 10; // 每页显示条数
  total = 0; // 总条数
  fetchData() {
    this.appService.getSongList(this.page, this.limit).subscribe((res: any) => {
        this.musicList = res.data;
        this.total = res.data[0].total_count;
        console.log(res);
      },
      error => {
        console.error('Error fetching data:', error);
      });
  }

  dnDisabled = false; // 下一页按钮是否禁用
  upDisabled = true; // 上一页按钮是否禁用
  // 翻页 下一页
  dnMusic() {
    if (this.page*this.limit < this.total) {
      this.page = this.page + 1;
      this.upDisabled = false;
      this.fetchData();
    }else {
      this.dnDisabled = true;
    }
  }
  // 翻页 上一页
  upMusic(){
    if (this.page > 1) {
      this.page = this.page - 1;
      this.upDisabled = true;
      this.fetchData();
    }else {
      this.dnDisabled = false;
    }
  }

  //播放音乐
  //  fetchAudioFile = async (id:any) => {
  //   console.log(id)
  //   try {
  //     const response = await axios.get(`http://localhost:10000/file/${id}`, {
  //       responseType: 'blob' // 确保响应类型为blob
  //     });
  //     const audioUrl = URL.createObjectURL(response.data);
  //     const audio = new Audio(audioUrl);
  //     audio.play();
  //     console.log("播放音频")
  //   } catch (error) {
  //     console.error('There has been a problem with your axios operation:', error);
  //   }
  // };

  currentAudioPlayer: HTMLAudioElement | null = null;
  currentMusicIndex: number | null = null;

  fetchAudioFile = async (music:any) => {
    // 如果有其他音乐正在播放，先暂停它
    if (this.currentAudioPlayer) {
      this.currentAudioPlayer.pause();
      this.resetPlayingStatus();
    }
    try {
      const response = await fetch(`http://localhost:10000/file/${music.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audioPlayer:any = document.getElementById('audioPlayer');
      audioPlayer.src = audioUrl;
      audioPlayer.play();

      // 更新当前播放的音乐项状态
      music.isPlaying = true;
      this.currentAudioPlayer = audioPlayer;
      this.currentMusicIndex = this.musicList.indexOf(music);

      // 添加播放进度事件监听器
      audioPlayer.addEventListener('timeupdate', this.updateProgressBar);
      // audioPlayer.addEventListener('ended', this.resetProgressBar);
      audioPlayer.addEventListener('ended', this.playNext);
      audioPlayer.addEventListener('ended', () => {
        music.isPlaying = false;
        this.currentAudioPlayer = null;
      }); // 播放结束时更新播放状态
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  resetPlayingStatus() {
    this.musicList.forEach((music:any) => music.isPlaying = false);
  }

   updateProgressBar = () => {
    const audioPlayer:any = document.getElementById('audioPlayer');
    const progressBar:any = document.getElementById('progressBar');
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${percentage}%`;
  };

   resetProgressBar = () => {
    const progressBar:any = document.getElementById('progressBar');
    progressBar.style.width = '0%';
  };

  playNext = async () => {
    if (this.currentMusicIndex !== null) {
      this.resetProgressBar();
      this.musicList[this.currentMusicIndex].isPlaying = false;
      const nextIndex = (this.currentMusicIndex + 1) % this.musicList.length;
      const nextMusic = this.musicList[nextIndex];
      await this.fetchAudioFile(nextMusic);
    }
  }
}
