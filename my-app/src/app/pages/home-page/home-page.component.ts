import {Component} from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [
    NzSiderComponent,
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzIconDirective,
      CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isCollapsed = false;
}
