import { Component, Input } from "@angular/core";

@Component({
    selector: "app-props-child",
    template: `
        <ul>
            <li *ngFor="let item of List">{{item}}</li>
        </ul>
    `
})
export class PropsBidingsChild {

    List: string[] = []
    @Input() set keyworld(str: string) {
        if (str) {
            this.List.push(str);
        }
    }
}