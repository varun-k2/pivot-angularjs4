import { Component } from '@angular/core';
import { FlexmonsterPivot } from "./flexmonster.angular4";

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`
})
export class AppComponent {
	onPivotReady(pivot: Flexmonster.Pivot): void {
        console.log("[ready] FlexmonsterPivot");
    }
}
