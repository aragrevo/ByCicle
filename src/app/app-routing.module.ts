import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'teams' },
  {
    path: 'teams',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/teams/teams.module').then(module => module.TeamsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
