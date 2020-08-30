import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/team';
import { SportsdbService } from 'src/app/core/services/sportsdb.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {


  $teams: Observable<Team[]>;
  // $teams: Observable<Team[]> = new Subject<Team[]>();

  constructor (
    private sportsdb: SportsdbService
  ){}

  async ngOnInit() {
    this.$teams = await this.sportsdb.GetAllTeams(4465);
  }

}
