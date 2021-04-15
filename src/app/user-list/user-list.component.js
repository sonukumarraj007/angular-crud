"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListComponent = void 0;
var core_1 = require("@angular/core");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(restApi) {
        this.restApi = restApi;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    // Get users list
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        return this.restApi.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    // Delete employee
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        if (window.confirm("Are you sure, you want to delete?")) {
            this.restApi.deleteUser(id).subscribe(function (data) {
                _this.loadUsers();
            });
        }
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: "app-user-list",
            templateUrl: "./user-list.component.html",
            styleUrls: ["./user-list.component.css"]
        })
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
