<template>
<nav>
	<b style="color:#090;font-size:1.5em;">MD EDIT</b>{{" "}}
	<a href="../">Vanilla</a>{{" "}}
	<router-link to="/">Vue.js</router-link>{{" "}}
	<a :href="br">Blazor</a>{{" "}}
	<a :href="ng">Angular</a>{{" "}}
	<a href="https://github.com/yosgspec/SimpleMarkdownEdit">GitHub</a>
</nav>
</template>

<style scoped>
.router-link-exact-active{
	color: #FF0000;
	font-weight: bold;
}
</style>

<script lang=ts>
import {Component,Watch,Vue} from "vue-property-decorator";

@Component
export default class NavMenu extends Vue{
	get br(){return location.href.replace("/ve/","/br/");}
	get ng(){return location.href.replace("/ve/","/ng/");}
}
</script>
