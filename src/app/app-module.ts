import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, ComicsSimpleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
