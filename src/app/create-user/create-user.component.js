"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(formBuilder, restApi, router) {
        this.formBuilder = formBuilder;
        this.restApi = restApi;
        this.router = router;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        // user form
        this.createUser = this.formBuilder.group({
            userName: [null, forms_1.Validators.required],
            age: [null, forms_1.Validators.required],
            email: [null, forms_1.Validators.required],
            phone: [null, forms_1.Validators.required],
            dob: [null, forms_1.Validators.required],
            gander: [null, forms_1.Validators.required],
        });
    };
    CreateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.restApi.createUser(this.createUser.value).subscribe(function (data) {
            _this.router.navigate(['/user-list']);
            alert('User Created...');
        });
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-create-user',
            templateUrl: './create-user.component.html',
            styleUrls: ['./create-user.component.css']
        })
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;
