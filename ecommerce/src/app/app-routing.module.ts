import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    
  },
  { 
    path:'', 
    redirectTo:"/",
    pathMatch:"full" 
  },
  {
    path:'**', 
    redirectTo:'error/404'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
