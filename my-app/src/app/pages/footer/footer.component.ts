import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzTransitionPatchDirective} from "ng-zorro-antd/core/transition-patch/transition-patch.directive";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NzGridModule,
    NzDividerComponent,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
