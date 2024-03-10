import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app.routes";
import { AppComponent } from './app.component';
import {GreetingComponent} from "./pages/greeting/greeting.component";
import {HeaderComponent} from "./pages/header/header.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzSpaceComponent} from "ng-zorro-antd/space";
import {NzDescriptionsComponent, NzDescriptionsItemComponent} from "ng-zorro-antd/descriptions";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NgOptimizedImage} from "@angular/common";
import {NzIconDirective} from "ng-zorro-antd/icon";
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [GreetingComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
