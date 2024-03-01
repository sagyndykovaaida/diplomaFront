import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import {NzSpaceComponent} from "ng-zorro-antd/space";
import {NzDescriptionsComponent, NzDescriptionsItemComponent} from "ng-zorro-antd/descriptions";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzGridModule,
    NzPageHeaderModule,
    NzSpaceComponent,
    NzDescriptionsComponent,
    NzDescriptionsItemComponent,
    NzButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
