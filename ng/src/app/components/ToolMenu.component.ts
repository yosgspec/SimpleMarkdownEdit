const template=`
<div style=display:flex>
	<img src="./favicon.ico" height=32 width=32 style=image-rendering:pixelated>
	<button (click)="newItem()">❇新規</button>
	<input placeholder=" [題名]" list="mdDatas" [(ngModel)]="mdTitle">
	<datalist id="mdDatas">
		<option  *ngFor="let v of mdDatas | keyvalue">{{v.key}}</option>
	</datalist>
	<button (click)="loadItem()">📖読込</button>
	<button (click)="saveItem()">💾保存</button>
	<button (click)="deleteItem()">🚫削除</button>
	<button (click)="viewFile()">📂開く</button>
	<input type="file" accept=".md" id="uploadFile" (change)="uploadFile()" [style.display]="isViewFile? '': 'none'">
	<button (click)="downloadMD()">📲Markdown</button>
	<button (click)="downloadHTML()">📲HTML</button>
</div>

<style>
.active{
	color: #FF0000;
	font-weight: bold;
}
</style>
`;

import {Component,OnInit} from "@angular/core";
import {SortedMap,downloadText} from "../lib/Util";
import {Memory} from "../lib/Memory";
import {StoreService} from "../store.service";

@Component({
	selector: "ToolMenu",
	templateUrl: template
})
export class ToolMenuComponent implements OnInit{
	constructor(
		private state:StoreService
	){}
	mdDatas=new SortedMap<string,string>();
	mdTitleCurrent="";
	mdTitle="";
	get mdTxt():string{return this.state.mdTxt;}
	set mdTxt(value:string){this.state.mdTxt=value;}
	get mdHtml():string{return this.state.mdHtml;}
	isViewFile=false;

	ngOnInit(){
		try{
			this.mdDatas=new SortedMap(Memory.loadMap("mdTxts"));
		}
		catch{}
	}
	newItem(){
		if(!confirm("初期化してもよろしいですか?")) return;
		this.mdTitleCurrent="";
		this.mdTitle="";
		this.mdTxt="";
	}
	loadItem(){
		if(!this.mdDatas.has(this.mdTitle)){
			alert(`「${this.mdTitle}」が存在しません。`);
			return;
		}
		if(!confirm(`「${this.mdTitle}」を読み込みますか?`)) return;
		this.mdTitleCurrent=this.mdTitle;
		this.mdTxt=this.mdDatas.get(this.mdTitle);
	}
	saveItem(){
		if(this.mdTitle=="") this.mdTitle="default";
		if(this.mdDatas.has(this.mdTitle)){
			if(this.mdTitleCurrent!=this.mdTitle){
				if(!confirm(`「${this.mdTitle}」を上書きしますか?`)) return;
			}
		}
		else{
			this.mdDatas.set(this.mdTitle,this.mdTxt);
		}
		this.mdTitleCurrent=this.mdTitle;
		Memory.saveMap("mdTxts",this.mdDatas);
	}
	deleteItem(){
		if(!this.mdDatas.has(this.mdTitle)){
			alert(`「${this.mdTitle}」が存在しません。`);
			return;
		}
		if(!confirm(`「${this.mdTitle}」を削除しますか?`)) return;
		this.mdDatas.delete(this.mdTitle);
		Memory.saveMap("mdTxts",this.mdDatas);
	}
	viewFile(){
		this.isViewFile=!this.isViewFile;
	}
	async uploadFile(){
		const ele=document.getElementById("uploadFile") as HTMLInputElement;
		const reader=new FileReader();
		reader.readAsText(ele.files[0]);
		await new Promise(res=>reader.addEventListener("load",res));
		this.mdTxt=reader.result.toString();
		this.mdTitle=ele.value.split(/\\|\//).pop();
		ele.value="";
		this.isViewFile=false;
	}
	downloadMD(){
		if(this.mdTitle=="") this.mdTitle="default";
		downloadText(this.mdTitle,this.mdTxt,".md");
	}
	downloadHTML(){
		if(this.mdTitle=="") this.mdTitle="default";
		downloadText(this.mdTitle,
`<!DOCTYPE html>
<html lang=ja>

<head>
	<title>${this.mdTitle}</title>
	<link rel=stylesheet href="https://unpkg.com/karma-css@latest/dist/karma.min.css">
	<link rel=stylesheet href="https://fonts.googleapis.com/css?family=Kosugi&display=swap">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
	<style>code{font-family: "Kosugi",sans-serif;}</style>
</head>

<body>
	${this.mdHtml.replace(/\n/g,"\n\t")}
</body>

</html>
`,".html");
	}
}
