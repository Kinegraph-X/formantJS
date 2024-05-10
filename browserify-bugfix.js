const fs = require('fs');

const filePath = './node_modules/browserify/index.js';
const searchString = /if \(row\.entry \|\| row\.expose\) \{\n\s*self\._bpack\.standaloneModule/;
const replacementString = 'if ((row.entry || row.expose) && row.id === 1) {\n\tself._bpack.standaloneModule';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedData = data.replace(searchString, replacementString);

  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been modified successfully.');
  });
});
