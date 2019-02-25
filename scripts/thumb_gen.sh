#!/bin/bash
for dir in ./public/*/; do
    OUT_DIR="./public/thumbnails/$(basename $dir)"
    if [ "$(basename $dir)" == "thumbnails" ] ; then
        continue;
    fi
    mkdir -p "$OUT_DIR"
    for image in ${dir}*; do
        convert "$image" -resize 400x "$OUT_DIR/$(basename $image)"
    done
done