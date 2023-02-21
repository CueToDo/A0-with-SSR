
// Angular
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Auth0
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';

// Components
import { AppComponent } from './app.component';

// Misc
import { environment as env } from '../environments/environment';


@NgModule({
  imports: [
    AppModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
