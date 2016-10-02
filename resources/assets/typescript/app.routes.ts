import { Routes } from '@angular/router';

import { LoginRoutes } from './app/login/index';
import { SignupRoutes } from './app/signup/index';
import { MainRoutes } from './app/components/index';

import { LoginComponent } from './app/login/index';

export const AppRoutes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
	...MainRoutes,
	{ path: '**', component: LoginComponent },
];