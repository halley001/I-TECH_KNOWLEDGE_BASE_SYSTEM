import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BodyoutlineComponent } from './components/bodyoutline/bodyoutline.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlphaBankComponent } from './components/alpha-bank/alpha-bank.component';
import { ICollectComponent } from './components/i-collect/i-collect.component';
import { AlphaMicrofinanceComponent } from './components/alpha-microfinance/alpha-microfinance.component';
import { AlphaAdminComponent } from './components/alpha-admin/alpha-admin.component';
import { AlphaSmsComponent } from './components/alpha-sms/alpha-sms.component';
import { AlphaMobileComponent } from './components/alpha-mobile/alpha-mobile.component';
import { AlphaMoneticsComponent } from './components/alpha-monetics/alpha-monetics.component';
import { AlphaReportComponent } from './components/alpha-report/alpha-report.component';
import { AlphaWebComponent } from './components/alpha-web/alpha-web.component';
import { AlphaXpressComponent } from './components/alpha-xpress/alpha-xpress.component';
import { VirtualAlphaComponent } from './components/virtual-alpha/virtual-alpha.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    BodyoutlineComponent,
    FooterComponent,
    AlphaBankComponent,
    ICollectComponent,
    AlphaMicrofinanceComponent,
    AlphaAdminComponent,
    AlphaSmsComponent,
    AlphaMobileComponent,
    AlphaMoneticsComponent,
    AlphaReportComponent,
    AlphaWebComponent,
    AlphaXpressComponent,
    VirtualAlphaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
