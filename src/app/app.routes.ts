import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { MedicinesComponent } from './medicines/medicines.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'users', component: UsersComponent },
    { path: 'medicines', component: MedicinesComponent }
];
