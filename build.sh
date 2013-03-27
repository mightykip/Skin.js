#!/bin/bash

mkdir dist
tools/closure-library/closure/bin/calcdeps.py -i src/skin.js \
-p tools/closure-library \
-o compiled \
-c tools/closure/compiler.jar \
-f "--compilation_level=ADVANCED_OPTIMIZATIONS" \
> dist/skin.js
