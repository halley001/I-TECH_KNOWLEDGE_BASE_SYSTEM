import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AlphaAdminComponent } from './components/alpha-admin/alpha-admin.component';
import { ICollectComponent } from './components/i-collect/i-collect.component';
import { AlphaBankComponent } from './components/alpha-bank/alpha-bank.component';
import { AlphaMicrofinanceComponent } from './components/alpha-microfinance/alpha-microfinance.component';
import { AlphaWebComponent } from './components/alpha-web/alpha-web.component';
import { AlphaXpressComponent } from './components/alpha-xpress/alpha-xpress.component';
import { AlphaReportComponent } from './components/alpha-report/alpha-report.component';
import { AlphaSmsComponent } from './components/alpha-sms/alpha-sms.component';
import { AlphaMoneticsComponent } from './components/alpha-monetics/alpha-monetics.component';
import { VirtualAlphaComponent } from './components/virtual-alpha/virtual-alpha.component';
import { AlphaMobileComponent } from './components/alpha-mobile/alpha-mobile.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'alpha-admin', component:AlphaAdminComponent},
  {path:'i-collect', component:ICollectComponent},
  {path:'alpha-bank', component:AlphaBankComponent},
  {path:'alpha-microfinance', component:AlphaMicrofinanceComponent},
  {path:'alpha-web', component:AlphaWebComponent},
  {path:'alpha-xpress', component:AlphaXpressComponent},
  {path:'alpha-report', component:AlphaReportComponent},
  {path:'alpha-sms', component:AlphaSmsComponent},
  {path:'alpha-monetics', component:AlphaMoneticsComponent},
  {path:'virtual-alpha', component:VirtualAlphaComponent},
  {path:'alpha-mobile', component:AlphaMobileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


