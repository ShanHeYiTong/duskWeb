import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.less'
})
export class MusicPlayerComponent {
  musicUrl: string = 'https://v3-web.douyinvod.com/19e279fcd34eb2adac35e17fd036e18c/667572dd/video/tos/cn/tos-cn-ve-15c001-alinc2/oYDvJSn9kQmJAMRADmJgeWnCeTbgABjRZIMJOY/?a=6383&ch=5&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=322&bt=322&cs=2&ds=6&ft=LjhJEL998xztuo0mo0P5NdvaUFiXmcYtxVJEHzBMIbPD-Ipz&mime_type=video_mp4&qs=11&rc=M2UzaDc8ZzdpOjY6aDY4M0BpamxtbDQ6Zjc8cjMzNGkzM0AuYzFeMl8uNjIxMjNiLTAuYSMxYzE2cjRvX2ZgLS1kLTBzcw%3D%3D&btag=c0000e00028000&cquery=100o_101s_100B_100x_100z&dy_q=1718962131&feature_id=c6de0308cacfd993ef282c8e1c646267&l=2024062117284902F3114DB1EDE20E5E88&__vid=7360172727967206706'; // 替换为你的音乐文件 URL
  musicUrl1: string = 'https://ws6.stream.qqmusic.qq.com/RS02062VY0yO1U1Ahy.mp3?guid=1398732880&vkey=98E65B65F97D4402610E017DB085EF121DEBE1E64F88C71946ED25DDBC56925362E436A00040EA661DAB1A0FA426D3D5E2C3E292B35BBEC3&uin=2094089664&fromtag=120052'

  constructor() { }

  ngOnInit(): void {
  }

}
