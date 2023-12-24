import { NgModule } from '@angular/core';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './auth-main.routing';
import { SharedModule } from '../../shared/shared.module';
import { AuthDetailComponent } from './auth-detail/auth-detail.component';


@NgModule({
    declarations:[
        AuthMainComponent,
        SignupComponent,
        LoginComponent,
        AuthDetailComponent
    ],
    imports: [
        SharedModule,
        AuthenticationRoutingModule
    ],
    providers: []
})
export class AuthenticationModule { }

