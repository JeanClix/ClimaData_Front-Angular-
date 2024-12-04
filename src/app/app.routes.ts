import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherWorldComponent } from './pages/weather-world/weather-world.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DeparamentosPeruComponent } from './pages/deparamentos-peru/deparamentos-peru.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'wheater-departamentos',
        component: DeparamentosPeruComponent,
      },
      {
        path: 'weather-world',
        component: WeatherWorldComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
];
