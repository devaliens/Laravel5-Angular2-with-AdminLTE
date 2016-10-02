import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BlankPageRoutes } from './blank-page/index';

import { MainComponent } from './index';

export const MainRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: MainComponent,
    	children: [
			...BlankPageRoutes,
	    	...HomeRoutes,
    	]
  	}
];
