import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  form: FormGroup | undefined

  ngOnInit(){
    this.form = new FormGroup({
      where: new FormControl('Home')
    });
  }
  onSubmit(mediaItem: any){
    console.log(mediaItem);
  }
}
