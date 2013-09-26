Blockly Core
============

This is a fork of [Blockly](https://code.google.com/p/blockly/) an open source visual programming environment.


Install
_________

```
git clone https://github.com/code-dot-org/blockly-core.git
svn checkout http://closure-library.googlecode.com/svn/trunk/ closure-library-read-only
cd blockly-core
./build.py
```

__Note__: blockly-core/ and closure-library-read-only/ should be sibling directories.


Usage
__________

- Open blockly-core/apps/index.html and select an app to play around with.
- To run in debug/dev mode, find where the app sources `blockly_compressed.js` and change it to `blockly_uncompressed.js`. If that is in a .soy file, make sure to recompile the template. Instructions for recompiling templates are usually at the top of the template.

