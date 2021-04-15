"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormArrayComponent = void 0;
var core_1 = require("@angular/core");
var user_model_1 = require("../shared/model/user.model");
var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.users = [];
        this.user = new user_model_1.User();
        this.userData = [];
    }
    FormArrayComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    FormArrayComponent.prototype.onSubmit = function () {
        // console.log(this.skillsForm.value);
    };
    // Get users list
    FormArrayComponent.prototype.loadUsers = function () {
        var _this = this;
        return this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    FormArrayComponent = __decorate([
        core_1.Component({
            selector: 'app-form-array',
            templateUrl: './form-array.component.html',
            styleUrls: ['./form-array.component.css']
        })
    ], FormArrayComponent);
    return FormArrayComponent;
}());
exports.FormArrayComponent = FormArrayComponent;
