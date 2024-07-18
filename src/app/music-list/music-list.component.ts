import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {CommonModule} from "@angular/common";

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
  playMusic(id: number) {

    // @ts-ignore
    document.getElementById('playAudio').addEventListener('click', () => {
      const audioElement = new Audio();
      audioElement.src = `http://localhost:10000/file/${id}`;
      audioElement.controls = true;
      audioElement.preload = 'auto';  // 预加载音频
      console.log(id)
      console.log("预加载音频")
      audioElement.addEventListener('canplaythrough', () => {
        audioElement.play().catch(error => {
          console.error('Error playing audio:', error);
        });
        console.log("加载完成")
      });

      // 将音频元素添加到页面中
      document.body.appendChild(audioElement);
    });
  }
}
