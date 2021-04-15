import { UserService } from '../shared/api/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  users: any = [];
  user = new User()

  userData = [];


  constructor(public userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadUsers();

  }

  onSubmit() {
    // console.log(this.skillsForm.value);
  }

  // Get users list
  loadUsers() {
    return this.userService.getUsers().subscribe((data: {}) => {
      this.users = data;
      console.log(this.users)
    });
  }

}
