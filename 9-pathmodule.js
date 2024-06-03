const path=require('path')

//shows the path seperator
console.log(path.sep);

//shows the complete path to the selected file.in this case it shows the path to test.txt
const filepath=path.join('\content','subfolder','test.txt')
console.log(filepath);

//only shows the base of the path.so in this case test.txt
const base= path.basename(filepath)
console.log(base);

const absolute= path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);

