import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.less'
})
export class MusicPlayerComponent {
  musicUrl: string = 'https://ws6.stream.qqmusic.qq.com/RS020642X9Vg2rEz8s.mp3?guid=8370941418&vkey=A637EF8E0FE10D9DB61094E13FA4AF5F66E4E15DC5C5828E35CCC8B117E64EF8BFA431EDE9A1DCF53688134879E54F801463F7FD4BFA53B1&uin=2094089664&fromtag=120052'; // 替换为你的音乐文件 URL
  musicUrl1: string =
    'https://ws6.stream.qqmusic.qq.com/RS02062VY0yO1U1Ahy.mp3?guid=1398732880&vkey=98E65B65F97D4402610E017DB085EF121DEBE1E64F88C71946ED25DDBC56925362E436A00040EA661DAB1A0FA426D3D5E2C3E292B35BBEC3&uin=209408966\n' +
    '4&fromtag=120052'

  constructor() { }

  ngOnInit(): void {
  }

}
