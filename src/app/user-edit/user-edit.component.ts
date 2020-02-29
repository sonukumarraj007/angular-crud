import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/api/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userData: any = {};
  updateUserForm: FormGroup;
  id: any;
  tmpdate: Date;

  constructor(
    public restApi: UserService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.updateUserForm = this.formBuilder.group({
      userName: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      dob: [ null, Validators.required],
      gander: [ null, Validators.required],
    });

    this.id = this.actRoute.snapshot.params.id;
    this.restApi.getUser(this.id).subscribe((res: any) => {
      console.log(JSON.stringify(res));
      this.updateUserForm.patchValue({
        userName: res.userName,
        age: res.age,
        dob: this.parseDate(res.dob),
        phone: res.phone,
        email: res.email,
        gander: res.gander
      });
    }, (err) => {
      console.log(err);
    });
  }


  public parseDate = dateString => {
    return this.tmpdate = new Date(dateString);
  }

  // Update user details
  updateUser() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateUser(this.id, this.updateUserForm.value).subscribe(data => {
        this.router.navigate(['/user-list']);
      });
    }
  }


}
