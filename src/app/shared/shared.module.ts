import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';


const components = [
   BannerComponent
];

@NgModule({
    declarations: components,
    exports: [...components],
    imports: [
        CommonModule,
    ],
    providers: []
})
export class SharedModule { }
