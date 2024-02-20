import { Injectable } from '@angular/core';
import {IContent} from "../Models/IContent";
import {CONTENTITEMS} from "./data/mock-content";
import {first} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NormalPeopleActorService {
  getContentItems(): IContent[] {
    return CONTENTITEMS;
  }

  // Method 1: Get IContent item by ID
  getContentItemById(id: number): IContent | undefined {
    return CONTENTITEMS.find(item => item.id === id);
  }

  // Method 2: Add new IContent item
  addContentItem(newItem: IContent): IContent[] {
    CONTENTITEMS.push(newItem);
    return CONTENTITEMS;
  }

  // Method 3: Update existing IContent item
  updateContentItem(updatedItem: IContent): IContent[] {
    const index = CONTENTITEMS.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      CONTENTITEMS[index] = updatedItem;
    }
    return CONTENTITEMS;
  }

  // Method 4: Remove IContent item by ID
  removeContentItemById(id: number): IContent | undefined {
    const index = CONTENTITEMS.findIndex(item => item.id === id);
    if (index !== -1) {
      return CONTENTITEMS.splice(index, 1)[0];
    }
    return undefined;
  }
}
