const fs = require('fs');
const yaml = require('js-yaml');
const { execSync } = require("child_process");

const style = 'github';

let file_ids;

try {
    let file_ids_raw = fs.readFileSync('./file_ids.yaml', 'utf8');
    file_ids = yaml.safeLoad(file_ids_raw);
}catch(error){
    console.log(error);
}

const file = process.argv[2];
// assume file is in src/YYYY-MM-DD.md
const title = file.split(/[\.\/]/)[1];
const id = file_ids[title];

if(id){
    // we have the file id! so append to existing file
    execSync(`md2gslides ${file} -a ${id} -e -n -s ${style} -t ${title} --use-fileio`,
	     {stdio: 'inherit'});
}else{
    // don't have a current file id, so create a new file
    execSync(`md2gslides ${file} -n -s ${style} -t ${title} --use-fileio`,
	     {stdio: 'inherit'});
}

console.log('done');
