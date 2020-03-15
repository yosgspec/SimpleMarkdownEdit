<template>
<main>
	<NavMenu />
	<hr>
	<router-view/>
</main>
</template>

<script lang:ts>
import {Component,Vue} from "vue-property-decorator";
import NavMenu from "@/components/NavMenu.vue";

@Component({
	components:{
		NavMenu
	}
})
export default class App extends Vue{}
</script>
