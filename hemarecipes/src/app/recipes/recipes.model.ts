export class Recipe{
  public name: string;
  public details: string;
  public imagePath: string;
  constructor(name:string, details:string,imagePath:string){
    this.name = name;
    this.details = details;
    this.imagePath = imagePath;
  }
}
