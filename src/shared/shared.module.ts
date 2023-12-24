import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material.module';
import { HeaderCoponent } from './component/header/header.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations:[
        HeaderCoponent
    ],
    imports: [
        
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        ToastrModule.forRoot(),
        MaterialModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule,
        CommonModule,
        MaterialModule,
        HeaderCoponent
    ],
    providers: []
})
export class SharedModule { }

