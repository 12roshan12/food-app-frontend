import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/auth-main.module';
import { MainModule } from './main/main.module';



@NgModule({
    declarations:[
    ],
    imports: [
        AuthenticationModule,
        MainModule,
    ],
    exports:[
        AuthenticationModule,
        MainModule
    ],
    providers: []
})
export class AppMainModule { }

