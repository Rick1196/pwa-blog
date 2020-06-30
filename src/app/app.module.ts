import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/comps/navigation/navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './common/interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RefsComponent } from './common/pages/refs/refs.component';
import { HelpComponent } from './common/pages/help/help.component';
import { HighlightService } from './common/services/highlight.service';
import { NgxViewerModule } from 'ngx-viewer';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RefsComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, NgxViewerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
