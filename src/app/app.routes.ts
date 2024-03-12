import { Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
    },

    {
      path: "profile-view",
      component: ProfileViewComponent,
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
