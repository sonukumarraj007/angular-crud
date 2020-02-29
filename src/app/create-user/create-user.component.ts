import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUser: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public restApi: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    // user form
    this.createUser = this.formBuilder.group({
      userName: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      dob: [ null, Validators.required],
      gander: [ null, Validators.required],
    });
  }

  onSubmit() {
    this.restApi.createUser(this.createUser.value).subscribe((data: {}) => {
      this.router.navigate(['/user-list']);
      alert('User Created...');
    });
  }
}
