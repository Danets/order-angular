import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/layout/home/home.component';
import { OrganizeComponent } from './containers/organize/organize.component';
import { ProfileComponent } from './components/auth/profile/profile.component';

import {AuthGuardService } from './components/auth/auth-guard.service';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: SignupComponent },
	{ path: 'organize', component: OrganizeComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
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