import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MusicPlayerComponent} from "./music-player/music-player.component";
import {AppHeaderComponent} from "./header/app-header.component";
import {AppFooterComponent} from "./footer/app-footer.component";
import {MusicListComponent} from "./music-list/music-list.component";
import {MusicLoginComponent} from "./music-login/music-login.component";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicPlayerComponent, AppHeaderComponent, AppFooterComponent, MusicListComponent, MusicLoginComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'duskWeb';
}
