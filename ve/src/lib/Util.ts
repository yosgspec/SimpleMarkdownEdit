export class SortedMap<T1,T2> extends Map<T1,T2>{
	has(key:T1):boolean{return super.has(key);}
	set(key:T1,value:T2):this{
		if(this.has(key)){
			super.set(key,value);
			return this;
		}
		const map=[...this.entries()];
		map.push([key,value]);
		map.sort();
		this.clear();
		map.forEach(([key,value])=>super.set(key,value));
		return this;
	}
}

export function downloadText(txtName:string,txt:string,ext:string){
	const blob=new Blob([txt],{type:"text/plain"});
	const url=URL.createObjectURL(blob);
	const a=document.createElement("a");
	document.body.appendChild(a);
	a.download=txtName+(txtName.slice(-ext.length)==ext? "": ext);
	a.href=url;
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
