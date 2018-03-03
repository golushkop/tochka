import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { WelcomeRoutes } from './welcome.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WelcomeRoutes),
    SharedModule
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
