import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

console.log('sadklhh');
// export const canNavigateGuard: CanDeactivateFn<unknown> = (
//   component,
//   currentRoute,
//   currentState,
//   nextState
// ) => {

//   const sharedService = inject(SharedService);
//   const router = inject(Router)
//   const messageService = inject(MessageService);
//   let canNavigate: boolean = sharedService.canNavigate;

//   if (!canNavigate) {
//     messageService.add({
//       severity: 'success',
//       summary: 'Success',
//       detail: 'Message Content',
//     });
//   }

//   return canNavigate;
// };

@Injectable({
  providedIn: 'root'
})
export class canNavigateGuard implements CanDeactivate<unknown> {

  constructor(private sharedService : SharedService , private messageService : MessageService ){}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


  let canNavigate: boolean = this.sharedService.canNavigate;

  if (!canNavigate) {
    console.log('dsaaaaaaaaaaa');

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  return canNavigate;
  
  }
}