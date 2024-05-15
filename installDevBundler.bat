mkdir codebase
cd codebase

git clone https://github.com/Kinegraph-X/formantCore.git
ren formantCore jsCore
git clone https://github.com/Kinegraph-X/FormantComponentLib.git
ren FormantComponentLib jsComponentLib
git clone https://github.com/Kinegraph-X/formantStyleManager.git
ren formantStyleManager jsStyleManager
git clone https://github.com/Kinegraph-X/formantLexicalTools.git
ren formantLexicalTools jsLexicalTools
git clone https://github.com/Kinegraph-X/formantKeyboardEvents.git
ren formantKeyboardEvents jsKeyboardEvents
cd ..

call curl -L https://github.com/Kinegraph-X/_formantCoreBundler/archive/refs/heads/master.zip -o file.zip && tar -xf file.zip && del file.zip
call curl -L https://github.com/Kinegraph-X/_formantComponentLibBundler/archive/refs/heads/master.zip -o file.zip && tar -xf file.zip && del file.zip