import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/about/about/about.component';
import { HobbiesComponent } from './pages/hobbies/hobbies/hobbies.component';
import { SkillsComponent } from './pages/skills/skills/skills.component';

const routes: Routes = [
  {path: "", redirectTo: "home",pathMatch: 'full'},
  {path: "home", component: HomeComponent, data: { breadcrumb: 'Home' }},
  {path: "about", component: AboutComponent, data: { breadcrumb: 'About' }},
  {path: "abilities", component: SkillsComponent, data: { breadcrumb: 'Abilities' }},
  {path: "hobbies", component: HobbiesComponent, data: { breadcrumb: 'Hobbies' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
