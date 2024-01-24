import { Item } from "./item";
export class Restaurant{
    restaurantId:number|undefined;
    restaurantName:string|undefined;
    imageUrl:string|undefined;
    location:string|undefined;
    rating:number|undefined;
    items: Item[]|undefined;

}