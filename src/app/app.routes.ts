import { Routes } from '@angular/router';
import {ContentListComponent} from "./content-list/content-list.component";
import {DetailedContentComponent} from "./detailed-content/detailed-content.component";
import {FormComponentComponent} from "./form-component/form-component.component";

export const routes: Routes = [
  {path: 'content', component: ContentListComponent},
  {path: 'content/:id', component: DetailedContentComponent},
  {path: 'form', component: FormComponentComponent},

  //redirects
  {path: '', redirectTo: "content", pathMatch: 'full'},
];
