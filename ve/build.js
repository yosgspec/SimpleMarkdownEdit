const fs=require("fs").promises;
const child_process=require("child_process");
const exec=require("util").promisify(child_process.exec);

(async function(){
	console.log((await exec("yarn build")).stdout);

	const rmDir=async(path)=>{
		await Promise.all((await fs.readdir(path)).map(async f=>{
			let fullPath=`${path}/${f}`;
			return (await fs.stat(fullPath)).isDirectory()?
				await rmDir(fullpath):
				await fs.unlink(fullPath);
		}));
		await fs.rmdir(path);
	};

	try{await rmDir("../dist/ve");}catch{}
	try{await fs.rename("./dist","../dist/ve");}catch{}

	console.log("Vue.js Build Done.");
	process.stdin.once("data",process.exit());
})();
