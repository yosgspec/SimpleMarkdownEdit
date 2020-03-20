const template=String.raw`
<div id=index>
	<textarea [(ngModel)]="mdTxt"></textarea>
	<hr>
	<div [innerHTML]="mdHtml"></div>
</div>

<style>
div#index{
	display: flex;
	justify-content: space-between;
	height: 92vh;
	width: 100%;
}
#index textarea,#index div{
	width:50%;
	margin:5px;
}
#index div{
	overflow-y: scroll;
}
#index textarea,::ng-deep #index code{
	font-family: "M+ 1mn";
	font-size: 1.1em;
}
::ng-deep #index code{
	border: 1px solid #CCC;
}
</style>
`;

import {Component,OnInit} from "@angular/core";
import * as MarkdownIt from "markdown-it";
import {StoreService} from "../store.service";
declare var hljs:any;

@Component({
	selector: "Index",
	template: template
})
export class IndexComponent implements OnInit{
	constructor(
		private state:StoreService
	){}
	md=new MarkdownIt({html: true,linkify: true});
	get mdTxt():string{return this.state.mdTxt;}
	set mdTxt(value:string){
		this.state.mdTxt=value;
		this.state.mdHtml=this.mdHtml;
	}
	get mdHtml(){return this.md.render(this.mdTxt.replace(/\n/g,"  \n"));}

	ngOnInit(){
		this.mdTxt=
`# TEST TITLE

*<font color=#990000>Say</font>*
**<u>Hello!</u>**

\`\`\`ts:
for(let i:number=0;i<100;i++){
	console.log(i);

}
\`\`\`
`;
	}

	ngAfterViewChecked(){
		hljs.initHighlighting.called=false;
		hljs.initHighlighting();
	}
}
