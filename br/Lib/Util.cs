using System;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using Microsoft.JSInterop;

class Util{
	static public async Task downloadText(IJSRuntime js,string txtName,string txt,string ext){
		await js.InvokeVoidAsync("eval",$@"
			const blob=new Blob(['{Regex.Escape(txt)}'],{{type:'text/plain'}});
			const url=URL.createObjectURL(blob);
			const a=document.createElement('a');
			document.body.appendChild(a);
			a.download=`{Regex.Escape(txtName+(ext.Length<txtName.Length && txtName.Substring(txtName.Length-ext.Length)==ext? "": ext))}`;
			a.href=url;
			a.click();
			a.remove();
			URL.revokeObjectURL(url);
		");
	}
}
