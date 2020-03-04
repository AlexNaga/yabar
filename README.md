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
$ git clone https://github.com/AlexNaga/yabar $HOME/Library/Application\ Support/Übersicht/widgets/nibbar
```

## Dependencies

- [jq](https://github.com/stedolan/jq) — used for parsing json output and displaying the workspaces widget
  - install with homebrew: `brew install jq`
- [SF Mono Fonts](https://developer.apple.com/fonts/) (optional) — used for symbols in the statusbar widget
- [ifstat](http://macappstore.org/ifstat/) **For Übersicht widget**

# Setup

You will be need spotify oAuth token for [web
api](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/).
You can get one from
[here](https://developer.spotify.com/console/get-track/?id=3n3Ppam7vgaVa1iaRUc9Lp)
by clicking **Get Token**. _THIS TOKEN WILL BE EXPIRED QUICK_

```sh
echo -n "TOKEN_HERE" > "${HOME}/Library/Application Support/Übersicht/widgets/yabar/lib/spotify/token.sec"
```

## Usage

### Yabai workspaces widgets

There are 2 widgets for displaying workspaces: `spaces-primary` and `spaces-secondary`. The `spaces-secondary` is used when working with dual displays.
If you're using a single display, disable it in the Übersicht's menu.

### Refreshing yabai workspaces widget

The widgets for displaying yabai workspaces aren't refreshing automatically (to preserve battery). To refresh them, you can add these lines utilizing [yabai's signals](https://github.com/koekeishiya/yabai/wiki/Commands#automation-with-rules-and-signals) at the end of `.yabairc`:

#### When using a single display

```sh
yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-spaces-primary-jsx\"'"
```

#### When using dual displays

```sh
yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-spaces-primary-jsx\"'"
yabai -m signal --add event=display_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-spaces-primary-jsx\"'"

yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-spaces-secondary-jsx\"'"
yabai -m signal --add event=display_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"yabar-spaces-secondary-jsx\"'"
```
