import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MusicPlayerComponent} from "./music-player/music-player.component";
import {AppHeaderComponent} from "./header/app-header.component";
import {AppFooterComponent} from "./footer/app-footer.component";
import {MusicListComponent} from "./music-list/music-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicPlayerComponent, AppHeaderComponent, AppFooterComponent, MusicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'duskWeb';
}
