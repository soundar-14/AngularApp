import { InjectionToken, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

export const APP_CONFIG = new InjectionToken<string>('AppConfig');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AuthService]
})
export class AppCoreModule {
  static forRoot(@Optional() config: string): ModuleWithProviders<AppCoreModule> {
    return {
      ngModule: AppCoreModule,
      providers: [
        {
          provide: APP_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
