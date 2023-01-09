import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { Language } from './core/models/Language';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailedPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent, pathMatch: 'full'},
      { path: 'detailed-page/:code', component: DetailedPageComponent }
    ], { onSameUrlNavigation: 'reload' })
  ],
  providers: [Language],
  bootstrap: [AppComponent]
})
export class AppModule { }
