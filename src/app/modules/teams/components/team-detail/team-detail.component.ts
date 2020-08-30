import { Component, OnInit } from '@angular/core';
import { SportsdbService } from 'src/app/core/services/sportsdb.service';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/models/team';
import { Router, ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  $team: Observable<Team>;

  constructor(
    private sportsdb: SportsdbService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(x => console.log(x))
    ).subscribe(({name}) => {
      this.$team = this.sportsdb.GetTeam(name);
    });
  }

}
