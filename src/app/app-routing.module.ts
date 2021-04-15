import { FormArrayComponent } from './form-array/form-array.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-list' },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'form-array', component: FormArrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
