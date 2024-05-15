call npm -g install grunt
call npm -g install sorcery
mkdir projects
cd projects
call curl -L https://github.com/Kinegraph-X/FormantBundler/releases/download/0.0.1/FormantBundler.zip -o file.zip & tar -xf file.zip & del file.zip
move /Y package.json ..\.
cd ..
call node node_modules/formantjs/browserify-bugfix.js
call node node_modules/formantjs/sourceMap-fix.js