import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		mdTxt: "" as string,
		mdHtml: "" as string
	},
	mutations:{
		setMdTxt(state,txt:string){
			state.mdTxt=txt;
		},
		setMdHtml(state,html:string){
			state.mdHtml=html;
		}
	}
});
