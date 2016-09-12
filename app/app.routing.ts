import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './app.about'
import { MyHomeComponent } from './app.home';

const appRoutes: Routes = [
	{ path: 'home', component: MyHomeComponent },
	{ path: 'about' , component: AboutComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full'}
]

export const appRoutingProviders: any[] = [
	
];

export const routing = RouterModule.forRoot(appRoutes);