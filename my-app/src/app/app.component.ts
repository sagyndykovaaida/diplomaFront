import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {HeaderComponent} from "./pages/header/header.component";
import {FooterComponent} from "./pages/footer/footer.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // imports: [
  //   RouterOutlet,
  //   HomePageComponent,
  //   HeaderComponent,
  //   FooterComponent,
  //   // AppModule
  // ],
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  ngOnInit(){

  }
}
