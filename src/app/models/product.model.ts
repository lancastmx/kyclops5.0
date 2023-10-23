export class Product {
  constructor(
  public id: string,
  public title: string,
  public price: number,
  public images: string[],
  public description: string,
  public category: string,
  public taxes?: number,
  ){}
}
