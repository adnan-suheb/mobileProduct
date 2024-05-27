import { Component } from "@angular/core";
import { ImobileProduct } from "../../model/mobile.interface";
import { products } from "../../const/mobile";



@Component({
    selector:"app-mobile",
    templateUrl:"./mobile.component.html",
    styleUrls:["./mobile.component.scss"]
})

export class MobileComponent{
    
    mobileData:Array<ImobileProduct>=products

}
