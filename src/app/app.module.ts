import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminsComponent } from './admins/admins.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
