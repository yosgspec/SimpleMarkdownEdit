const template=`
<main>
	<NavMenu></NavMenu>
	<hr>
	<router-outlet></router-outlet>
</main>
`;

import {Component} from "@angular/core";

@Component({
	selector: "app-root",
	template: template
})
export class AppComponent{}
