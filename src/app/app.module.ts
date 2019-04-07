import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainareaComponent,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'aboutus',
        component:AboutusComponent
      },
      {
        path:'contactus',
        component:ContactusComponent
      },
      {
        path:'careers',
        component:CareersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
