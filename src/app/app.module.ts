import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavsComponent } from './navs/navs.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WriteupsComponent } from './writeups/writeups.component';
import { TinymceEditorComponent } from './tinymce-editor/tinymce-editor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReadComponent } from './read/read.component';


const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'register',
    component: RegistrationComponent
  },
  {
    path:'writeup',
    component:WriteupsComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'read',
    component:ReadComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavsComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    WriteupsComponent,
    TinymceEditorComponent,
    WelcomeComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
