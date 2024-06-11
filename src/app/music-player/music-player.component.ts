import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.less'
})
export class MusicPlayerComponent {
  musicUrl: string = 'https://ws6.stream.qqmusic.qq.com/RS02061584tX0GZd0R.mp3?guid=8317195949&vkey=002E9A3DEE1E68A813BA4FE366B145E549A54FD90DBE5D85CD034FEE6090979199899444E8BA93D41771BEE4ED202DB0BE67137BF2A1034C&uin=&fromtag=120052'; // 替换为你的音乐文件 URL

  constructor() { }

  ngOnInit(): void {
  }

}
