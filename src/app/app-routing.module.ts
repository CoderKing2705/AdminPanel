import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { authGuardGuard } from './services/authGuard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'group-list', component: GroupListComponent, canActivate: [authGuardGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuardGuard] },
  { path: 'invoice', component: InvoiceComponent, canActivate: [authGuardGuard] },
  { path: 'invoice-list', component: InvoiceListComponent, canActivate: [authGuardGuard] },
  { path: 'payment', component: PaymentsComponent, canActivate: [authGuardGuard] },
  { path: 'payment-list', component: PaymentListComponent, canActivate: [authGuardGuard] },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
