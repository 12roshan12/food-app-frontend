import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations:[  
        HomeComponent
      ],
    imports: [
        SharedModule,
        MainRoutingModule
    ],
    providers: []
})
export class MainModule { }

