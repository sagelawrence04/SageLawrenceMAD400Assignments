import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentListItem} from "../Models/ContentListItem";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'SageLawrenceMyFirstAngularApplication';

  items: ContentListItem[] = [
    new ContentListItem("Daisy Edgar Jones", "Marianne Sheridan", 25, "xxx"),
    new ContentListItem("Paul Mescal", "Connell Waldron", 27, "xxx"),
    new ContentListItem("Sarah Greene", "Lorraine Waldron", 39, "xxx"),
    new ContentListItem("Franke Blake", "Alan Sheridan", 27, "xxx")
  ]
}
