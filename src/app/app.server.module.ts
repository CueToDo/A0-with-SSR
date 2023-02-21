import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { AuthService } from '@auth0/auth0-angular';
import { FakeAuthService } from './fake-auth.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [{
    provide: AuthService,
    useClass: FakeAuthService,
  }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
