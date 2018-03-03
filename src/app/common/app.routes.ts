import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

const appRoutes = [
  {
    path: '',
    loadChildren: './modules/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'news',
    loadChildren: './modules/news/news.module#NewsModule'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
