import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizeComponent } from './containers/organize/organize.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'organize', component: OrganizeComponent },
	{ path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }