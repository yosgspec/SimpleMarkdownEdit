const template=`
<nav>
	<a href="../">Vanilla</a>{{" "}}
	<a [href]="ve">Vue.js</a>{{" "}}
	<a [href]="br">Blazor</a>{{" "}}
	<a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" routerLink="/">Angular</a>{{" "}}
	<a href="https://github.com/yosgspec/SimpleMarkdownEdit">GitHub</a>
</nav>

<style>
.active{
	color: #FF0000;
	font-weight: bold;
}
</style>
`;

import {Component} from "@angular/core";

@Component({
	selector: "NavMenu",
	templateUrl: template
})
export class NavMenuComponent{
	get ve(){return location.href.replace("/ng/","/ve/");}
	get br(){return location.href.replace("/ng/","/br/");}
}
