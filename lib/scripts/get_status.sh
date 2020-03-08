#!/bin/bash

export LC_TIME="en_US.UTF-8"
TIME=$(date +"%H:%M")
DATE=$(date +"%a, %d %b")

BATTERY_PERCENTAGE=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%')
BATTERY_STATUS=$(pmset -g batt | grep "'.*'" | sed "s/'//g" | cut -c 18-19)
BATTERY_REMAINING=$(pmset -g batt | egrep -o '([0-9]+%).*' | cut -d\  -f3)

BATTERY_CHARGING=""
if [ "$BATTERY_STATUS" == "Ba" ]; then
  BATTERY_CHARGING="false"
elif [ "$BATTERY_STATUS" == "AC" ]; then
  BATTERY_CHARGING="true"
fi

LOAD_AVERAGE=$(sysctl -n vm.loadavg | awk '{print $2}')

WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
WIFI_NAME=$(networksetup -getairportnetwork en0 | cut -c 24-)
WIFI_PERCENTAGE=$(/System/Library/PrivateFrameworks/Apple*.framework/Versions/Current/Resources/airport -I | grep CtlRSSI | sed -e 's/^.*://g' | xargs -I SIGNAL)

echo $(cat <<-EOF
{
    "date": "$DATE",
    "time": "$TIME",
    "battery": {
        "percentage": "$BATTERY_PERCENTAGE",
        "charging": "$BATTERY_CHARGING",
        "remaining": "$BATTERY_REMAINING"
    },
    "cpu": {
        "loadAverage": "$LOAD_AVERAGE"
    },
    "wifi": {
        "status": "$WIFI_STATUS",
        "name": "$WIFI_NAME",
        "percentage": "$WIFI_PERCENTAGE"
    }
}
EOF
)
