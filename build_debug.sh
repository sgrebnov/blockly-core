#!/bin/bash
../closure-library-read-only/closure/bin/build/closurebuilder.py \
--root=../closure-library-read-only/ --root=core/ \
--compiler_jar=compiler.jar --compiler_flags="--formatting=PRETTY_PRINT" \
--compiler_flags="--debug" --namespace="Blockly" --output_mode=compiled \
> blockly_debug.js
