import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let _isLoggedIn = localStorage.getItem('UserData');
  const _router = inject(Router);
  const _toastr = inject(ToastrService)
  if (_isLoggedIn == null) {
    _router.navigate(['login']);
    _toastr.warning("You need to log in first!", '', { positionClass: 'toast-top-center' })
  }

  return true;
};
