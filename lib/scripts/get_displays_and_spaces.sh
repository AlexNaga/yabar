#!/usr/bin/env bash

# Get info about displays from yabai and filter the data with jq
DISPLAYS=$(/usr/local/bin/yabai -m query --displays | /usr/local/bin/jq 'map({ index: .index, spaces: .spaces })')

# Get info about spaces from yabai and filter the data with jq
SPACES=$(/usr/local/bin/yabai -m query --spaces | /usr/local/bin/jq '[.[] | { index: .index, display: .display, visible: .visible, focused: .focused }]')

OUTPUT="{ \"displays\": $DISPLAYS, \"spaces\": $SPACES }"
echo $OUTPUT
