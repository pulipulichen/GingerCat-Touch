# GingerCat-Touch

Touching the Ginger cat to hear he mew.

-   GirHub: <https://github.com/pulipulichen/GingerCat-Touch>
-   ISSUES: <https://github.com/pulipulichen/GingerCat-Touch/issues>

----

# Package Results
-   Web
    *   <https://pulipulichen.github.io/GingerCat-Touch/www/>
    *   <https://bit.ly/2Me5seP>
-   Windows x64
    *   Download: <https://drive.google.com/file/d/1a6BvxOecz9izGz5UFxZetxwgD5TmsGX6/view?usp=sharing>
    *   Package by 7-zip: <https://portableapps.com/apps/utilities/7-zip_portable>
    *   Upload (for owner): <https://drive.google.com/open?id=1a6BvxOecz9izGz5UFxZetxwgD5TmsGX6>
-   Mobile APP:
    *   Google Play: <https://play.google.com/store/apps/details?id=gingercat_touch_app.pulipuli.info>
    *   Install: <https://build.phonegap.com/apps/3297046/install>
    *   APK: <https://build.phonegap.com/apps/3297046/download/android>
    *   Install shorten URL: <https://bit.ly/2MfXCRH>
      ![Mobile APP](https://chart.googleapis.com/chart?chs=116x116&cht=qr&chl=https%3A%2F%2Fbuild.phonegap.com%2Fapps%2F3297046%2Finstall%2FwjJ1oeiQ5QMRpjZ6vngR&chld=L|1&choe=UTF-8)
    *   Homepage: <https://build.phonegap.com/apps/3297046/share> <https://build.phonegap.com/apps/>
    *   Privacy policy: <https://pulipulichen.github.io/GingerCat-Touch/privacy_policy.html>

# Pacakge

## Web
-   Open `./www/index.html` in your browser.

## Electron
-   `./dev-bin/0-npm_package_install.bat`
-   node `./dev-bin/1-package.js`

## Phonegap Build
-   Tutorial: <http://blog.pulipuli.info/2017/10/phonegapapp-phoengap-web-template-wrap.html>
-   <https://build.phonegap.com/apps>
-   <https://build.phonegap.com/apps/3173248/builds>

----

# Environment Setup

````
npm install electron-prebuilt --save-dev
npm install electron-prebuilt -g
npm install electron-packager --save-dev
npm install electron-packager -g
npm install asar
````

----

# Configuration

## Web (global)

`./www/config.js`

## Electron

`./www/electron-config.json`

-   請修改electron-config.json設定檔，主要修改URL屬性

請務必確認JSON格式是否正確：使用JSONLint驗證 <http://jsonlint.com/>

openDevTools決定是否預設開啟偵錯工具

其他參數請參照BrowserWindow的參數設定：
<https://github.com/electron/electron/blob/master/docs/api/browser-window.md>

*   width、height (Integer)：設定高度與寬度
*   useContentSize (Boolean)：根據內容的尺寸而調整視窗大小，很實用
*   center (Boolean)：是否置中
*   alwaysOnTop (Boolean)：是否永遠置頂
*   skipTaskbar (Boolean)：是否不出現在工作列。如果做了這件事情，那就要搭配Tray來把App關閉才行。
*   frame (Boolean)：是否無外框。無外框起來非常像現代的APP，很潮，但不一定好用。
*   kiosk (Boolean)：全螢幕單視窗模式。想要限制使用者只能用這個視窗時可以使用，非常好用。
*   transparent (Boolean)：背景是否透明，這樣可以跟其他視窗一起使用。

#快速鍵
*   Escape：停止讀取或是離開APP
*   F5：重新讀取
*   Ctrl+Left：向後一頁
*   Ctrl+Right：向前一頁
*   Ctrl+Shift+i：切換偵錯工具

## PhoneGap Build

`./config.xml`

----

# Development

## OnsenUI ICON

-   fa <https://fontawesome.com/icons?d=gallery>
-   ion <http://ionicons.com/>
-   md <http://zavoloklom.github.io/material-design-iconic-font/icons.html>

## OnsenUI Vue API

-   <https://onsen.io/v2/api/vue/>
-   <https://semantic-ui.com/kitchen-sink.html>

## Monaca

-   <https://ide.monaca.mobi/editor/5b05cedae78885af578b456c>

## Icon Tools

-   Icon Slayer: <https://www.gieson.com/Library/projects/utilities/icon_slayer/>
-   iConvert Icons: <https://iconverticons.com/online/>

## Meow sound effect

-   Cat Sound Effect: <http://www.orangefreesounds.com/cat-sound-effect/>
-   Cat Noises: <http://www.orangefreesounds.com/cat-noises/>
-   Sad Cat Sound: <http://www.orangefreesounds.com/sad-cat-sound/>
-   Cat Meows Sounds: <http://www.orangefreesounds.com/cat-meows-sounds/>
-   Cat Sounds: <http://www.orangefreesounds.com/cat-sounds/>

## Privay Policy Template
-   App Privacy Policy Generator: <https://app-privacy-policy-generator.firebaseapp.com/>

----

# 感謝

此程式碼的起點主要來自：QQBoxy-酷酷方盒子
<http://qqboxy.blogspot.com/2016/06/electron-javascript-windows.html>
