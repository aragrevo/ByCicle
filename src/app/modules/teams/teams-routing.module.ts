import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  },
  {
    path: ':name',
    component: TeamDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
