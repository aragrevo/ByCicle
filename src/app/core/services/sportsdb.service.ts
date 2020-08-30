import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";

import { Team } from '../../shared/models/team';
import { Observable } from 'rxjs';

interface objTeams {
  teams: Team[];
}

@Injectable({
  providedIn: 'root'
})
export class SportsdbService {

  private endpoint = 'https://www.thesportsdb.com/api/v1/json/1/';

  constructor(
    private httpClient: HttpClient
  ) { }
;

  /**
   * Devuelve los equipos de una liga especifica
   * @param id ID de la Liga
   */
  GetAllTeams(id: number) {
    const url = `${this.endpoint}lookup_all_teams.php?id=${id}`;
    return this.httpClient.get<objTeams>(url).pipe(
      map( x => x.teams),
      // tap(x => console.log(x))
    )
  }
/**
 * Devuelve un equipo por su nombre
 * @param name Nombre del Equipo
 */
  GetTeam(name: string): Observable<Team> {
    const url = `${this.endpoint}searchteams.php?t=${name}`;
    return this.httpClient.get<objTeams>(url).pipe(
      map( x => x.teams[0]),
      tap(x => console.log(x))
    )
  }
}