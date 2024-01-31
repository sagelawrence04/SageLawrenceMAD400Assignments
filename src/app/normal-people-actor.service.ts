import { Injectable } from '@angular/core';
import {IContent} from "../Models/IContent";
import {CONTENTITEMS} from "./data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class NormalPeopleActorService {
// removed http client code
// returning Content Items from mock content list - note the change in the naming convention
  getContentItems(): IContent[] {
    return CONTENTITEMS;
  }

}
