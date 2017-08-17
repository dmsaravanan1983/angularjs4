import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RecipesService } from './shared/service/recipe.service';
import { LogService } from './shared/service/log.service';
import { CreateComponent } from './create/create.component';

const routes = [
  { path: '', component: TabsComponent },
  { path: 'newrecipe', component: CreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ RecipesService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
