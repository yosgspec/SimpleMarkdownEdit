var psi=new ProcessStartInfo("dotnet");
psi.Arguments="publish -c Release -o out";
psi.UseShellExecute=false;
psi.RedirectStandardOutput=true;
using(var p=Process.Start(psi)){
	var stdout=p.StandardOutput.ReadToEnd();
	p.WaitForExit();
	Console.WriteLine(stdout);
}
try{Directory.Delete(@"../dist/br",true);}catch{}
try{Directory.Move(@"./out/SimpleMarkdownEdit/dist",@"./dist");}catch{}
try{Directory.Delete(@"./out",true);}catch{}
try{Directory.Move(@"./dist",@"../dist/br");}catch{}

WriteLine("Blazor Build Done.");
Console.ReadLine();
