
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
    declarations:[],
    imports: [
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatBadgeModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatMenuModule,
        MatBadgeModule
    ],
    providers: []
})
export class MaterialModule { }

