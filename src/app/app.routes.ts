import { Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
    },

    {
        path: "movie-list",
        component: MovieListComponent,
    },

    {
        path: "movie-details",
        component: MovieDetailsComponent,
    },
    {
        path:"",
        redirectTo:"/dashboard",
        pathMatch:"full"
      },
];
