import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DeleteComponent } from './landing-page/delete/delete.component';
import { EditComponent } from './landing-page/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'home/delete/:name', component: DeleteComponent},
  { path: 'home/edit/:i/:name', component: EditComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
