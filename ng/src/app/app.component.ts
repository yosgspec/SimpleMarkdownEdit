const template=`
<main>
	<header>
		<ToolMenu></ToolMenu>
		<NavMenu></NavMenu>
	</header>
	<hr>
	<router-outlet></router-outlet>
</main>

<style>
header{
	display: flex;
	justify-content: space-between;
}
</style>
`;

import {Component} from "@angular/core";

@Component({
	selector: "app-root",
	template: template
})
export class AppComponent{}
