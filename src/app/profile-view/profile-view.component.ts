import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  profile:any;

  constructor(private route:ActivatedRoute) {
    this.profile = {
      poster_path:"",
      title:"",
      vote_average:"",
      release_date:"",
    }


  }

}
