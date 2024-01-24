import {Component, OnInit} from '@angular/core';
import {IContent} from "../../Models/IContent";

@Component({
  selector: 'content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  contentItems: IContent[] = [
    new IContent("Daisy Edgar Jones", "Marianne Sheridan", 25, "xxx"),
    new IContent("Paul Mescal", "Connell Waldron", 27, "xxx"),
    new IContent("Sarah Greene", "Lorraine Waldron", 39, "xxx"),
    new IContent("Franke Blake", "Alan Sheridan", 27, "xxx")
  ];
  constructor() {
  }

  ngOnInit(): void{
  }
}
