import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import{QRCodeModule }from 'angularx-qrcode';

@Component({
  selector: 'app-music-login',
  standalone: true,
  imports: [CommonModule,QRCodeModule ],
  templateUrl: './music-login.component.html',
  styleUrl: './music-login.component.less'
})
export class MusicLoginComponent {

  url = '';
  qrCodeValue: any;
  uuid: any;
  intervalId: any;

  // 构造函数
  constructor(private appService: AppService,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    // this.getMusicUrl();
    // this.generateQRCode();
  }

  getMusicUrl() {
    this.appService.getUrl().subscribe(response => {
        this.url = response.code;
        console.log(response);
      },
      error => {
        console.error('Error fetching data:', error);
      });
  }


  generateQRCode(): void {
    this.http.get<{ uuid: string }>('http://localhost:3000/spider/generate-uuid').subscribe((response:any) => {
      console.log('UUID generated successfully:', response.data.uuid)
      this.uuid = response.data.uuid;
      this.qrCodeValue = `http://localhost:3000/spider/scan/${this.uuid}`;
      console.log('QR:', this.qrCodeValue)
      this.checkQRCodeStatus();
    });
  }

  //轮询获取二维码扫描状态
  checkQRCodeStatus(): void {
    this.intervalId = setInterval(() => {
      this.http.get<{ status: string }>(`http://localhost:3000/spider/qrcode-status/${this.uuid}`).subscribe((response:any) => {
        console.log('QR code data:', response.data.status.status)
        if (response.data.status.status === 'confirmed') {
          console.log('授权登录成功!')
          clearInterval(this.intervalId);
          alert('QR code confirmed! Logging in...');
          // Handle successful login here
        }
      });
    }, 3000);
  }



}
