import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RecpieComponent } from './recpie/recpie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyhomeguardGuard } from './myhomeguard.guard';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'home' ,canActivate:[MyhomeguardGuard] ,component:HomeComponent},
  {path:'contacts' , canActivate:[MyhomeguardGuard] ,component:ContactsComponent},
  {path:'about' , canActivate:[MyhomeguardGuard] ,component:AboutComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'recpie/:id' , component:RecpieComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
