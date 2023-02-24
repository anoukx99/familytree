import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StamboomAanvullenComponent } from './stamboom-aanvullen/stamboom-aanvullen.component';
import { StamboomComponent } from './stamboom/stamboom.component';

const routes: Routes = [
  { path: 'stamboom_vullen', component: StamboomAanvullenComponent },
  { path: 'stamboom', component: StamboomComponent },
  { path: '', redirectTo: '/stamboom', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
