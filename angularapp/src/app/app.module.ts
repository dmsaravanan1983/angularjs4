import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { TemplateComponent } from './template/template.component';
import { ToolComponent } from './tool/tool.component';
import { HeroComponent } from './hero/hero.component';
@NgModule({
  declarations: [
    AppComponent, ServerComponent, TemplateComponent, ToolComponent,HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
