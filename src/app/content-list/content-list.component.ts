import {Component, OnInit} from '@angular/core';
import {IContent} from "../../Models/IContent";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'content-list',
  standalone: true,
  imports: [
    ContentListItemComponent,
    NgIf,
    NgForOf,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  // contentItems: IContent[] = [];
  constructor() {
  }

  ngOnInit(): void{
    console.log('ContentListComponent initialized');
    this.initializeContentItems();
  }

  private initializeContentItems(): void {
    // Example: Setting default values for contentItems
    // this.contentItems = [
    //   new IContent("Daisy Edgar Jones", "Marianne Sheridan", 25, "assets/images/marianne.webp"),
    //   new IContent("Paul Mescal", "Connell Waldron", 27, "assets/images/connell.webp"),
    //   new IContent("Sarah Greene", "Lorraine Waldron", 39, "assets/images/lorraine.jpeg"),
    //   new IContent("Franke Blake", "Alan Sheridan", 27, "assets/images/alan.webp")
    // ];
  }
}
