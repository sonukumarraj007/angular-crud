"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // Define API
        this.apiURL = 'http://localhost:2020';
        /*========================================
         CRUD Methods for consuming RESTful API
       =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API get() method => Fetch user list
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiURL + '/user');
    };
    //  HttpClient API get() method => Fetch user by id
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiURL + '/user/' + id);
    };
    // HttpClient API post() method => Create user
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.apiURL + '/user', JSON.stringify(user), this.httpOptions);
    };
    // HttpClient API put() method => Update user
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.apiURL + '/user/' + id, JSON.stringify(user), this.httpOptions);
    };
    // HttpClient API delete() method => Delete user
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.apiURL + '/user/' + id, this.httpOptions);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
