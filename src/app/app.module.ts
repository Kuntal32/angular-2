import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutusComponent },
  { path: 'home',      component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent, MenuComponent, AboutusComponent, HomeComponent]
})
export class AppModule { }
