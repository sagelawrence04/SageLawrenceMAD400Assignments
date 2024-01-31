import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {NormalPeopleActorService} from "../normal-people-actor.service";
import {IContent} from "../../Models/IContent";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'content-list',
  standalone: true,
  imports: [
    ContentListItemComponent,
    NgIf,
    NgForOf,
    NgClass,
    NgOptimizedImage,
    HttpClientModule
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  contentItems: IContent[] = []
  constructor(private normalPeopleActorService: NormalPeopleActorService) {
  }

  ngOnInit(): void{
    console.log('ContentListComponent initialized');
    // this.normalPeopleActorService.fetchData().subscribe(data => {
    //   console.log(data);
    //   this.contentItems = data;
    // });
  }

}
