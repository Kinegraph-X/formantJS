const fs = require('fs');

const rootPath = 'node_modules/formantjs';
const filePath = rootPath + '/formant.js.map';
const coreSearchString = /_formantCoreBundler-master\/build/;
const componentLibSearchString = /("sourceRoot":\s")(.*?)(")/;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

	let modifiedData = data.replace(coreSearchString, 'node_modules/formantjs');
	modifiedData = modifiedData.replace(componentLibSearchString, function(match, c1, c2, c3) {
	return c1 + '../..' + c3
  });
  
  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('SourceMap has been patched successfully.');
  });
});