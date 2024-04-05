import { CanActivateFn } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return false;
};
