import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }
  private apiUrl = 'http://localhost:10000';

  // Example method to get data from the backend
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/spider/list`);
  }

  // Example method to post data to the backend
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data-endpoint`, data);
  }

  //获取二维码url
  getUrl() {
    return this.http.get<any>(`${this.apiUrl}/spider/qrcode`);
  }

  //查询全部歌曲
  getSongList(page: number, limit: number) {
    return this.http.get(`${this.apiUrl}/file/list/all?page=${page}&limit=${limit}`);
  }

  //播放歌曲文件
  playMusic(id: number) {
    return this.http.get(`${this.apiUrl}/file/stream/${id}`);
  }
  //
  // //添加精彩片段
  // addWonderfulFragment(body: any) {
  //   return this.http.post(`api/room/mark-callback-segment`, body)
  // }
  //
  // //删除精彩片段
  // deleteWonderfulFragment(ids: any) {
  //   return this.http.patch(`api/room/delete-callback-segment`, {ids:ids})
  // }

}
