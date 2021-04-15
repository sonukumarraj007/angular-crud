"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// primeng module
var inputtext_1 = require("primeng/inputtext");
var button_1 = require("primeng/button");
var card_1 = require("primeng/card");
var calendar_1 = require("primeng/calendar");
var radiobutton_1 = require("primeng/radiobutton");
var create_user_component_1 = require("./create-user/create-user.component");
var user_list_component_1 = require("./user-list/user-list.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var user_details_component_1 = require("./user-details/user-details.component");
// Forms module
var forms_1 = require("@angular/forms");
// HttpClient module for RESTful API
var http_1 = require("@angular/common/http");
var http_error_interceptor_1 = require("src/http-error.interceptor");
var form_array_component_1 = require("./form-array/form-array.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                create_user_component_1.CreateUserComponent,
                user_list_component_1.UserListComponent,
                user_edit_component_1.UserEditComponent,
                user_details_component_1.UserDetailsComponent,
                form_array_component_1.FormArrayComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                inputtext_1.InputTextModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                card_1.CardModule,
                calendar_1.CalendarModule,
                button_1.ButtonModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                radiobutton_1.RadioButtonModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: http_error_interceptor_1.HttpErrorInterceptor,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
