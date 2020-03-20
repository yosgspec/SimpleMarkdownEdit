<template>
<main>
	<header>
		<ToolMenu />
		<NavMenu />
	</header>
	<hr>
	<router-view/>
</main>
</template>

<style scoped>
header{
	display: flex;
	justify-content: space-between;
}
</style>

<script lang:ts>
import {Component,Vue} from "vue-property-decorator";
import ToolMenu from "@/components/ToolMenu.vue";
import NavMenu from "@/components/NavMenu.vue";

@Component({
	components:{
		ToolMenu,
		NavMenu
	}
})
export default class App extends Vue{}
</script>
