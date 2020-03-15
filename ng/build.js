const fs=require("fs").promises;
const child_process=require("child_process");
const exec=require("util").promisify(child_process.exec);

(async function(){
	console.log((await exec("ng build --base-href=/mdedit/ng/")).stdout);

	const rmDir=async(path)=>{
		await Promise.all((await fs.readdir(path)).map(async f=>{
			let fullPath=`${path}/${f}`;
			return (await fs.stat(fullPath)).isDirectory()?
				await rmDir(fullpath):
				await fs.unlink(fullPath);
		}));
		await fs.rmdir(path);
	};

	try{await rmDir("../dist/ng");}catch{}
	try{await fs.rename("./dist/SimpleMarkdownEdit","../dist/ng");}catch{}
	try{await rmDir("./dist");}catch{}

	console.log("Angular Build Done.");
	process.stdin.once("data",process.exit);
})();
