const fs = require('fs');

const rootPath = 'node_modules/formantjs';
const filePath = rootPath + '/formant.js.map';
const searchString = /("sourceRoot":\s")(.*?)(")/;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedData = data.replace(searchString, function(match, c1, c2, c3) {
	return c1 + '../..' + c3
  });

  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('SourceMaps have been patched successfully.');
  });
});
