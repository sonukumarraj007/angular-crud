import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/api/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;

  userData: any = {};

  constructor(
    public restApi: UserService,
    public actRoute: ActivatedRoute,
    public router: Router) {
  }

  ngOnInit() {
    this.restApi.getUser(this.id).subscribe((data: {}) => {
      this.userData = data;
      console.log(this.userData);
    });
  }

}
