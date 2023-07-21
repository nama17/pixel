// ==UserScript==
// @name         r/placeDE Template
// @namespace    http://tampermonkey.net/
// @version      6
// @description  try to take over the canvas!
// @author       Chris-GW, nama17, Kloroller_DE
// @match        https://garlic-bread.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/klorollerde/pixel/raw/main/overlay.user.js
// @downloadURL  https://github.com/klorollerde/pixel/raw/main/overlay.user.js
// ==/UserScript==
let url = "https://raw.githubusercontent.com/klorollerde/pixel/main/overlay.png"
let url_de = "https://place.army/overlay_target.png"
/*let url_uk = "https://raw.githubusercontent.com/klorollerde/pixel/beta/overlay_uk.png"*/

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        console.log("asgfasgsdahdfashgdfhgdfsg", document.getElementsByTagName("garlic-bread-embed"));
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].children[0].getElementsByTagName("garlic-bread-camera")[0].children[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url;
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
                return i;
            })());
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].children[0].getElementsByTagName("garlic-bread-camera")[0].children[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url_de;
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
                return i;
            })());
        /*
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].children[0].getElementsByTagName("garlic-bread-camera")[0].children[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url_uk;
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
                return i;
            })())
            */
    }, false);
}
