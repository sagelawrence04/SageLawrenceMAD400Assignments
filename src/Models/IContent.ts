
export class IContent {

  constructor(
    id: number,
    realName : string,
    characterName : string,
    age : number,
    png : string)
  {
  }

  get id(): number {
    return this.id;
  }

  set id(value: number) {
    this.id = value;
  }

  get realName(): string {
    return this.realName;
  }

  set realName(value: string) {
    this.realName = value;
  }

  get characterName(): string {
    return this.characterName;
  }

  set characterName(value: string) {
    this.characterName = value;
  }

  get age(): number {
    return this.age;
  }

  set age(value: number) {
    this.age = value;
  }

  get png(): string {
    return this.png;
  }

  set png(value: string) {
    this.png = value;
  }
}
