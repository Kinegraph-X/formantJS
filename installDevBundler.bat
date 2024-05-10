mkdir codebase
cd codebase
mkdir jsCore
mkdir jsComponentLib
mkdir jsStyleManager
mkdir jsKeyboardEvents
mkdir jsLexicalTools

cd jsCore
git clone https://github.com/Kinegraph-X/formantCore.git
cd ../jsComponentLib
git clone https://github.com/Kinegraph-X/FormantComponentLib.git
cd ../jsStyleManager
git clone https://github.com/Kinegraph-X/formantStyleManager.git
cd ../jsLexicalTools
git clone https://github.com/Kinegraph-X/formantLexicalTools.git
cd ../jsKeyboardEvents
git clone https://github.com/Kinegraph-X/formantKeyboardEvents.git
cd ../..

curl -L https://github.com/Kinegraph-X/_formantCoreBundler/archive/refs/heads/master.zip -o file.zip && 7z x file.zip && del file.zip
curl -L https://github.com/Kinegraph-X/_formantComponentLibBundler/archive/refs/heads/master.zip -o file.zip && 7z x file.zip && del file.zip