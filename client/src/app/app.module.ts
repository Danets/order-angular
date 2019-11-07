import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListPostComponent } from './components/posts/list-post/list-post.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import {DialogComponent} from './shared/dialog.component';
import {DialogEditComponent} from './shared/dialogEdit.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostComponent } from './components/posts/list-post/post/post.component';
import { AddFormDirective } from './directives/add-form.directive';

import { LoginService } from './components/login/login.service';
import { OrganizeComponent } from './containers/organize/organize.component';
import { SelectorComponent } from './components/selector/selector.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MomentPipe } from './pipes/moment.pipe';
import { TaskrunnerComponent } from './components/taskrunner/taskrunner.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    ListPostComponent,
    AddPostComponent,
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
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
