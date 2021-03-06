import { Inject, Injectable, Optional } from '@angular/core';
import { APP_CONFIG } from '../app-core.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  _config="Logo"
  constructor(@Optional() @Inject(APP_CONFIG) config: string) {
    console.log(config);
   }
}
