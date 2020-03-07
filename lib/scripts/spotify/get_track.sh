#!/bin/bash

check=`ps -ef | grep "Spotify.app/Contents/MacOS/Spotify" | grep -v "grep" | wc -l | cut -d " " -f8`

echo # Ubsersicht receive no data without this?

get_from_current_track()
{
  osascript << EOF
tell application "Spotify"
  set currentUrl to $1 of current track as string
  return currentUrl
  end tell
EOF
}

get_json()
{
    printf '{
      "artist": "%s",
      "name": "%s"
    }' "$(get_from_current_track "artist" 2> /dev/null)" "$(get_from_current_track "name" 2> /dev/null)"
}

if [ $check -eq 1 ]; then
    current_track_json=$(get_json)
    echo "$current_track_json"
else
    exit
fi