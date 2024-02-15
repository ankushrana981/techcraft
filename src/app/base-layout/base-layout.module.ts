import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children:[
      // {
      //   path:'',
      //   loadChildren : () => import('../modules/home/home.module').then(m => m.HomeModule),
      // },
      { 
        path:'',
        loadChildren:()=> import('../modules/contact/contact.module').then(m=>m.ContactModule)
      },
    ]
  }
];

@NgModule({
  declarations: [
    BaseLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BaseLayoutModule { }
