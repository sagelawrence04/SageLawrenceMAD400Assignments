import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {IContent} from "../Models/IContent";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import {NormalPeopleActorService} from "./normal-people-actor.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  content: IContent[] = [];
  title = 'SageLawrenceMyFirstAngularApplication';
  contentItem = new IContent(5, "New Item", "Example Name", 19, "assets/images/connell.webp");
  constructor(private normalPeopleActorService: NormalPeopleActorService) {
  }
  ngOnInit(): void {
    this.content = this.normalPeopleActorService.getContentItems();
  }

  updateContent(): void {
    this.normalPeopleActorService.updateContentItem(this.contentItem);
    this.content = this.normalPeopleActorService.getContentItems();

  }
}
