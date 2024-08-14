// Magic constant

const path = require("path");
console.log("The file name is ===> ", __filename);
console.log("The folder name is ===> ", __dirname);

// Base name  : Last se utha ke dena folder name
console.log("Basename of Folder ==> ", path.basename(__dirname));
console.log("Basename of File ==> ", path.basename(__filename));
console.log("Extension of File ==> ", path.extname(__filename));


// New path 
let newPathWithDir = path.join(__dirname,'images/anshu.png')
console.log('New Path ==> ', newPathWithDir);


// Not a valid 
let newPathWithFile = path.join(__filename,'ok/anshu.png')
console.log('New File path ===> ', newPathWithFile);
