const fs = require('fs');

const rootPath = 'node_modules/formantjs';
const coreFilePath = rootPath + '/formant.js.map';
const componentLibFilePath = rootPath + '/formant.js.map';
const coreSearchString = '_formantCoreBundler-master/build';
const componentLibSearchString = /("sourceRoot":\s")(.*?)(")/;

fs.readFile(coreFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedData = data.replace(coreSearchString, 'node_modules/formantjs');

  fs.writeFile(coreFilePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Core SourceMaps have been patched successfully.');
  });
});

fs.readFile(componentLibFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedData = data.replace(componentLibSearchString, function(match, c1, c2, c3) {
	return c1 + '../..' + c3
  });

  fs.writeFile(componentLibFilePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('ComponentLib SourceMaps have been patched successfully.');
  });
});