import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IContent} from "../Models/IContent";
import {HttpClient} from "@angular/common/http";
import {CONTENTITEMS} from "./data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class NormalPeopleActorService {
// removed http client code

  //Creating getters and setters
// returning Content Items from mock content list - note the change in the naming convention
  getContentItems(): IContent[] {
    return CONTENTITEMS;
  }


}
