npm -g install grunt ^
& npm -g install sorcery ^
& mkdir projects ^
& cd projects ^
& curl -L https://github.com/Kinegraph-X/FormantBundler/releases/download/0.0.1/FormantBundler.zip -o file.zip ^
& 7z x file.zip ^
& del file.zip ^
& move /Y package.json ..\. ^
&cd .. ^
& node node_modules\formantjs\browserify-bugfix.js