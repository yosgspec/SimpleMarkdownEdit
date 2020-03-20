<template>
<div id=index>
	<textarea v-model="mdTxt"></textarea>
	<hr>
	<div v-html="mdHtml"></div>
</div>
</template>

<style scoped>
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
</style>
<style>
#index textarea,#index code{
	font-family: "M+ 1mn";
	font-size: 1.1em;
}
#index code{
	border: 1px solid #CCC;
}
</style>

<script lang=ts>
import {Component,Vue} from "vue-property-decorator";
import MarkdownIt from "markdown-it";
import store from "@/store/";
declare var hljs:any;

@Component
export default class InnerHTML extends Vue{
	md=new MarkdownIt({html: true,linkify: true});
	get mdTxt():string{return store.state.mdTxt;}
	set mdTxt(value:string){
		store.commit("setMdTxt",value);
		store.commit("setMdHtml",this.mdHtml);
	}
	get mdHtml(){return this.md.render(this.mdTxt.replace(/\n/g,"  \n"));}

	mounted(){
		this.mdTxt=
`# TEST TITLE

*<span style=color:#009900>Say</span>*
**<u>Hello!</u>**

\`\`\`ts
for(let i:number=0;i<100;i++){
	console.log(i);
}
\`\`\`
`;
	}

	updated(){
		hljs.initHighlighting.called=false;
		hljs.initHighlighting();
	}
}
</script>
