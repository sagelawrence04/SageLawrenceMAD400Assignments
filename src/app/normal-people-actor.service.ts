import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IContent} from "../Models/IContent";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NormalPeopleActorService {

  constructor(private icontent: IContent[]) {
  }

  //method to return an Observable of the IContent array (contentItems) from the mock-content file
  fetchData(): Observable<IContent[]> {
    return this.icontent;
  }
}
