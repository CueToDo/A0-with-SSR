// Angular
import { Injectable } from '@angular/core';

// Auth0
import { AppState, AuthService, LogoutOptions, RedirectLoginOptions } from '@auth0/auth0-angular';
import { RedirectLoginResult, User } from '@auth0/auth0-spa-js';

// rxjs
import { Observable, of } from 'rxjs';

@Injectable()
export class FakeAuthService extends AuthService {
  handleRedirectCallback(
    url?: string
  ): Observable<RedirectLoginResult> {
    return of({});
  }
  loginWithRedirect(options?: RedirectLoginOptions<AppState> | undefined): Observable<void> {
    return of();
  }
  logout(options?: LogoutOptions | undefined): Observable<void> {
    return of();
  }
  user$: Observable<User | null | undefined>;
}
