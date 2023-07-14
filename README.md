# emeraldjava-nodejs

## 14-07-2023

- Add 'angular-material' module.
- Add 'workspace' config to the root package.json to enable multi-module builds.
- 

## Router App

Basic router app listens on port xxx and redirects based on the url to specific apps

The nodejs apps via emeraldjava

http://emeraldjava.noip.me:9000/

## Proxy App
A [node-http-proxy|https://github.com/nodejitsu/node-http-proxy] will sit at the route of the pi2 and redirect to other
apps based on the url path.

## Spotify

Load an itunes xml file and get the rating of each app.
- use mp3 tag library to scan and extract file details

https://developer.spotify.com/web-api/

https://github.com/TooTallNate/node-spotify-web
http://www.node-spotify.com/

## NPM Setup
https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md

## Node Forever
sudo npm install -g forever
