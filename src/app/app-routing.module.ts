import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StamboomAanvullenComponent } from './stamboom-aanvullen/stamboom-aanvullen.component';
import { StamboomComponent } from './stamboom/stamboom.component';
import { VoorpaginaComponent } from './voorpagina/voorpagina.component';

const routes: Routes = [
  { path: 'stamboom_vullen', component: StamboomAanvullenComponent },
  { path: 'stamboom', component: StamboomComponent },
  { path: 'voorpagina', component: VoorpaginaComponent },
  { path: '', redirectTo: '/voorpagina', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
