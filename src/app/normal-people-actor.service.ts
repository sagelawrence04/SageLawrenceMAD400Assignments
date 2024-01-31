import { Injectable } from '@angular/core';
import {IContent} from "../Models/IContent";
import {CONTENTITEMS} from "./data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class NormalPeopleActorService {

  getContentItems(): IContent[] {
    return CONTENTITEMS;
  }
}
