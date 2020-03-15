<template>
<div id=index>
	<textarea v-model="txt"></textarea>
	<hr>
	<div v-html="md.render(txt.replace(/\n/g,'  \n'))"></div>
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
declare var hljs:any;

@Component
export default class InnerHTML extends Vue{
	md=new MarkdownIt({html: true});
	txt=
`# TEST TITLE

*<span style=color:#009900>Say</span>*
**<u>Hello!</u>**

\`\`\`ts
for(let i:number=0;i<100;i++){
	console.log(i);
}
\`\`\`
`;

	updated(){
		hljs.initHighlighting.called=false;
		hljs.initHighlighting();
	}
}
</script>
