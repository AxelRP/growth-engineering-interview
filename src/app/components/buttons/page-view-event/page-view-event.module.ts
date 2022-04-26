import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageViewEventComponent } from './page-view-event.component';



@NgModule({
    declarations: [
        PageViewEventComponent
    ],
    exports: [
        PageViewEventComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PageViewEventModule { }
