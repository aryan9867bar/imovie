import { Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
    },
    {
        path: "movie-details",
        component: MovieDetailsComponent,
    },
    {
        path: "feedbackform",
        component: FeedbackComponent,
    },
    {
        path:"",
        redirectTo:"/dashboard",
        pathMatch:"full"
      },
];
