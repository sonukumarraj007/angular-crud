import { UserService } from "./../shared/api/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users: any = [];

  constructor(public restApi: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  // Get users list
  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }

  // Delete employee
  deleteUser(id) {
    if (window.confirm("Are you sure, you want to delete?")) {
      this.restApi.deleteUser(id).subscribe(data => {
        this.loadUsers();
      });
    }
  }
}
