import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule}   from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {IndexComponent} from "./pages/Index.component";
import {NavMenuComponent} from "./components/NavMenu.component";

@NgModule({
	declarations:[
		AppComponent,
		IndexComponent,
		NavMenuComponent,
	],
	imports:[
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
		providers: [],
		bootstrap: [AppComponent]
})
export class AppModule {}
