"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(restApi, actRoute, router, formBuilder) {
        var _this = this;
        this.restApi = restApi;
        this.actRoute = actRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userData = {};
        this.parseDate = function (dateString) {
            return _this.tmpdate = new Date(dateString);
        };
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateUserForm = this.formBuilder.group({
            userName: [null, forms_1.Validators.required],
            age: [null, forms_1.Validators.required],
            email: [null, forms_1.Validators.required],
            phone: [null, forms_1.Validators.required],
            dob: [null, forms_1.Validators.required],
            gander: [null, forms_1.Validators.required],
        });
        this.id = this.actRoute.snapshot.params.id;
        this.restApi.getUser(this.id).subscribe(function (res) {
            console.log(JSON.stringify(res));
            _this.updateUserForm.patchValue({
                userName: res.userName,
                age: res.age,
                dob: _this.parseDate(res.dob),
                phone: res.phone,
                email: res.email,
                gander: res.gander
            });
        }, function (err) {
            console.log(err);
        });
    };
    // Update user details
    UserEditComponent.prototype.updateUser = function () {
        var _this = this;
        if (window.confirm('Are you sure, you want to update?')) {
            this.restApi.updateUser(this.id, this.updateUserForm.value).subscribe(function (data) {
                _this.router.navigate(['/user-list']);
            });
        }
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'app-user-edit',
            templateUrl: './user-edit.component.html',
            styleUrls: ['./user-edit.component.css']
        })
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
