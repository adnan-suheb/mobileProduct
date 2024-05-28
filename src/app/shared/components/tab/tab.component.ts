import { Component } from "@angular/core";
import { Iskills } from "../../model/ts.interface";
import { skills } from "../../const/tab";



@Component({
    selector: "app-tabsComponent",
    templateUrl: "./tab.component.html",
    styleUrls: ["./tab.component.scss"]
})

export class TabComponent {

    skillsArr:Array<Iskills>=skills;
    selectedFrameWork : string=this.skillsArr[0].name;
    info : string=this.skillsArr[0].info;
}