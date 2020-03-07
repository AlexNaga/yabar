# yabar

A [yabai](https://github.com/koekeishiya/yabai) status bar widget for [Übersicht](https://github.com/felixhageloh/uebersicht).

## Features

- Active workspace number
- Battery indicator
- Connected WiFi name
- Volume
- Date

## Screenshot

![img](./img/screenshot_0.png)

## Installation

Clone this repo to your Übersicht widgets directory.

```bash
$ git clone git@github.com:AlexNaga/yabar.git $HOME/Library/Application\ Support/Übersicht/widgets/yabar
```

## Dependencies

- [jq](https://github.com/stedolan/jq) — used for parsing json output and displaying the workspaces widget
  - install with homebrew: `brew install jq`
- [SF Mono Fonts](https://developer.apple.com/fonts/) (optional) — used for symbols in the statusbar widget

# Setup

You will be need spotify oAuth token for [web
api](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/).
You can get one from
[here](https://developer.spotify.com/console/get-track/?id=3n3Ppam7vgaVa1iaRUc9Lp)
by clicking **Get Token**. _THIS TOKEN WILL BE EXPIRED QUICK_

```sh
echo -n "<YOUR_TOKEN_HERE>" > "${HOME}/Library/Application Support/Übersicht/widgets/yabar/lib/scripts/spotify/token.sec"
```

## Usage

### Refreshing yabai workspaces widget

The widgets for displaying yabai workspaces aren't refreshing automatically (to preserve battery). To refresh them, you can add these lines utilizing [yabai's signals](https://github.com/koekeishiya/yabai/wiki/Commands#automation-with-rules-and-signals) at the end of `.yabairc`:

```sh
yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-workspace-jsx\"'"
yabai -m signal --add event=display_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-workspace-jsx\"'"
```
