import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookItem } from "../Models/BookItem";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SageLawrenceMyFirstAngularApplication';
  items: BookItem[] = [
    new BookItem("Normal People", "Sally Rooney", 1234567890123, true),
    new BookItem("People We Meet on Vacation", "Emily Henry", 1234567890124, true),
    new BookItem("Divine Rivals", "Rebecca Ross", 1234567890125, false),
    new BookItem("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 1234567890126, true),
  ]
}
