import {IContent} from "../../Models/IContent";

//Changed the class to create new objects
//changed var name to CONTENTITEMS as it is a constant
export const CONTENTITEMS: IContent[] = [
  new IContent("Daisy Edgar Jones", "Marianne Sheridan", 25, "assets/images/marianne.webp"),
  new IContent("Paul Mescal",  "Connell Waldron", 27, "assets/images/connell.webp"),
  new IContent("Sarah Greene", "Lorraine Waldron", 39,  "assets/images/lorraine.jpeg"),
  new IContent("Franke Blake", "Alan Sheridan",  27,  "assets/images/alan.webp")
];
