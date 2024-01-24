import {OnInit} from "@angular/core";

export class ContentListItem implements OnInit {
  constructor(public realName : string, public characterName : string, public age : number, public png : string) {
  }
  ngOnInit(): void {
  }
}
