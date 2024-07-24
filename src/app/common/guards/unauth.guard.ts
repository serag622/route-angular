import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const unauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const alocation = inject(Location);
  let token = localStorage.getItem('token');

  if (!token) {
    return true;
  }
  // alocation.back();
  router.navigate([''])

  return false;
};
