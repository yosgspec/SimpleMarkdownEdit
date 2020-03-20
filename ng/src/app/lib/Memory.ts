//ローカルストレージの読み書き(Jsonとの相互変換対応)
export class Memory{
	//読込
	public static load<T>(key:string):T{
		return JSON.parse(localStorage[key]);
	}

	//保存
	public static save<T>(key:string,memory:T):void{
		localStorage.setItem(key,JSON.stringify(memory));
	}

	//削除
	public static remove<T>(key:string):void{
		localStorage.removeItem(key);
	}

	//Map読込
	public static loadMap<T>(key:string):Array<[string,T]>{
		return Object.entries(this.load<{[s:string]:T}>(key));
	}

	//Map保存
	public static saveMap<T>(key:string,map:Map<string,T>):void{
		const memory:{[s:string]:T}={};
		map.forEach((value,key)=>memory[key]=value);
		this.save(key,memory);
	}
}
