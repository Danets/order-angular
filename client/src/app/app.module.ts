import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from './components/auth/profile/profile.component';

import { LoginService } from './components/auth/login/login.service';

import { HomeComponent } from './components/layout/home/home.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { ListPostComponent } from './components/posts/list-post/list-post.component';
import { PostComponent } from './components/posts/list-post/post/post.component';

import {DialogComponent} from './components/popups/dialog.component';
import {DialogEditComponent} from './components/popups/dialogEdit.component';

import { OrganizeComponent } from './containers/organize/organize.component';
import { SelectorComponent } from './containers/organize/selector/selector.component';
import { CalendarComponent } from './containers/organize/calendar/calendar.component';
import { TaskrunnerComponent } from './containers/organize/taskrunner/taskrunner.component';

import { AddFormDirective } from './directives/add-form.directive';

import { MomentPipe } from './pipes/moment.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    ListPostComponent,
    DialogComponent,
    DialogEditComponent,
    FooterComponent,
    SignupComponent,
    PostComponent,
    AddFormDirective,
    OrganizeComponent,
    SelectorComponent,
    CalendarComponent,
    MomentPipe,
    TaskrunnerComponent,
    ProfileComponent
  ],
  entryComponents: [DialogComponent, DialogEditComponent, PostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
