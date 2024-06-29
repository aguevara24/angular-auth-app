import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { AuthStatus } from "../interfaces";

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url;
  // localStorage.setItem( 'url', url );

  const authService = inject( AuthService );
  const router = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    router.navigateByUrl( 'auth/login' );

    return false;
  }

  // if ( authService.authStatus() === AuthStatus.checking ) {
  //   return false;
  // }
  

  return true;
};
