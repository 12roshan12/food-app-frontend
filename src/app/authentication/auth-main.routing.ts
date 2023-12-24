import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthDetailComponent } from './auth-detail/auth-detail.component';

const routes: Routes = [
    { path: '', component: AuthMainComponent ,children:[
        { path: 'sign-up', component: SignupComponent },
        { path: 'login', component: LoginComponent },
        { path: '', component: AuthDetailComponent },
    ] },
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
