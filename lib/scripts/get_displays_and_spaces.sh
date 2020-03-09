#!/usr/bin/env bash

DISPLAYS=$(/usr/local/bin/yabai -m query --displays)
SPACES=$(/usr/local/bin/yabai -m query --spaces)

OUTPUT="{ \"displays\": $DISPLAYS, \"spaces\": $SPACES }"
echo $OUTPUT
