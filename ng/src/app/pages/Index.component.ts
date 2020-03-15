const template=String.raw`
<div id=index>
	<textarea [(ngModel)]="txt"></textarea>
	<hr>
	<div [innerHTML]="md.render(txt.split('\n').join('  \n'))"></div>
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

import {Component} from "@angular/core";
import * as MarkdownIt from "markdown-it";
declare var hljs:any;

@Component({
	selector: "Index",
	template: template
})
export class IndexComponent{
	md=new MarkdownIt({html: true});
	txt=
`# TEST TITLE

*<font color=#990000>Say</font>*
**<u>Hello!</u>**

\`\`\`ts:
for(let i:number=0;i<100;i++){
	console.log(i);
}
\`\`\`
`;

	ngAfterViewChecked(){
		hljs.initHighlighting.called=false;
		hljs.initHighlighting();
	}
}
