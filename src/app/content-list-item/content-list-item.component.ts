import {Component, Input} from '@angular/core';
import {IContent} from "../../Models/IContent";

@Component({
  selector: 'content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() contentItem?: IContent;

  constructor() {
  }
}
