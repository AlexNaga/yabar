#!/usr/bin/env bash

echo "􀙇 $(networksetup -getairportnetwork en0 | cut -c 24-)"
