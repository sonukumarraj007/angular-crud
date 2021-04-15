"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var form_array_component_1 = require("./form-array/form-array.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var create_user_component_1 = require("./create-user/create-user.component");
var user_list_component_1 = require("./user-list/user-list.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var user_details_component_1 = require("./user-details/user-details.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'user-list' },
    { path: 'create-user', component: create_user_component_1.CreateUserComponent },
    { path: 'user-list', component: user_list_component_1.UserListComponent },
    { path: 'user-edit/:id', component: user_edit_component_1.UserEditComponent },
    { path: 'user-details/:id', component: user_details_component_1.UserDetailsComponent },
    { path: 'form-array', component: form_array_component_1.FormArrayComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
