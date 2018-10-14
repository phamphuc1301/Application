import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DashboardComponent} from './component/dashboard/dashboard.component'
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { MessageComponent } from './component/message/message.component';
import { AppRoutingModule } from './app-routing.module';
import {routingForRoot} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routingForRoot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
