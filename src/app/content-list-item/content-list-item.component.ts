import {Component, Input, OnInit} from '@angular/core';
import {IContent} from "../../Models/IContent";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'content-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() contentItem?: IContent;

}
