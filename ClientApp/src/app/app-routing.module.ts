import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    // Với tất cả các đường dẫn sai
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
