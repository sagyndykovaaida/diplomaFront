import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {NzInputDirective} from "ng-zorro-antd/input";
import {FooterComponent} from "../footer/footer.component";
@Component({
  selector: 'app-greeting',
  standalone:true,
  imports: [
    NzButtonModule,
    HeaderComponent,
    NzDividerModule,
    NzAvatarComponent,
    NzGridModule,
    NzTypographyComponent,
    NzInputDirective,
    FooterComponent


  ],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent  {

}
