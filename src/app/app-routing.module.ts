import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from  './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {InformationComponent} from './information/information.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from  './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {DetailsComponent} from './details/details.component';
import {ScheduleComponent} from './schedule/schedule.component';
const routes: Routes = [
 
  { path: 'header',
   component: HeaderComponent
  },
  { path: 'sidebar',
   component: SidebarComponent
  },
  { path: 'home',
  component: HomeComponent
 },
  { path: 'information',
   component: InformationComponent
  },
  { path: 'about_us',
  component: AboutusComponent
 },
 { path: 'contact_us',
 component: ContactusComponent
},
{ path: 'appointment',
  component: AppointmentComponent
 },
 { path: 'Details',
  component: DetailsComponent
 },
 { path: 'Schedule',
  component: ScheduleComponent
 }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
