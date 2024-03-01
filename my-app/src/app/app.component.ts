import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {HeaderComponent} from "./pages/header/header.component";
// import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    HomePageComponent,
    HeaderComponent,
    // AppModule
  ],
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  ngOnInit(){

  }
}
