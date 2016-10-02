import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { LoginModule } from './app/login/login.module';
import { SignupModule } from './app/signup/signup.module';
import { MainModule } from './app/components/main.module';
import { SharedModule } from './app/shared/shared.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(AppRoutes,{
			useHash: true
		}),
		LoginModule,
		SignupModule,
		MainModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]

})

export class AppModule { }

