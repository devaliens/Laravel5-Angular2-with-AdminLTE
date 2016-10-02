import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { BlankPageModule } from './blank-page/blank-page.module';

import { MainComponent } from './main.component';

import {SidebarMenuComponent} from '../shared/index';
import {SidebarUserComponent} from '../shared/index';
import {SidebarSearchComponent} from '../shared/index';
import {HeaderComponent} from '../shared/index';
import {NavComponent} from '../shared/index';
import {ToolsbarComponent} from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
        BlankPageModule,
        HomeModule
    ],
    declarations: [
        MainComponent, 
        SidebarMenuComponent,
        SidebarUserComponent,
        SidebarSearchComponent,
        HeaderComponent,
        NavComponent,
        ToolsbarComponent
    ],
    exports: [
        MainComponent, 
        SidebarMenuComponent,
        SidebarUserComponent,
        SidebarSearchComponent,
        HeaderComponent,
        NavComponent,
        ToolsbarComponent
    ]
})

export class MainModule { }
