export class BookItem {
  constructor(public title : string, public author : string, public isbn? : number, public haveRead : boolean = false) {
  }
}
