import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/project-component/welcome/welcome.component';
import { Homework1Component } from 'src/project-component/homework1/homework1.component';
import { Homework2Component } from 'src/project-component/homework2/homework2.component';
import { Homework3Component } from 'src/project-component/homework3/homework3.component';


// Define the routes
const routes: Routes = [
  { path: '', component: WelcomeComponent },  
  { path: 'home-work1', component: Homework1Component },  
  { path: 'home-work2', component: Homework2Component },
  { path: 'home-work3', component: Homework3Component }  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use forRoot() to configure routes at the root level
  exports: [RouterModule]                   // Export RouterModule so it can be used in AppModule
})
export class AppRoutingModule { }
