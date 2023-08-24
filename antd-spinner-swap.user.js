// ==UserScript==
// @name          AntD spinner swap
// @namespace     http://tampermonkey.net/
// @version       1.0.1
// @description   Allows to change AntD spinner to any image
// @author        -
// @downloadURL   https://github.com/half-public-tools/antd-spinner-swap/raw/main/antd-spinner-swap.user.js
// @updateURL     https://github.com/half-public-tools/antd-spinner-swap/raw/main/antd-spinner-swap.user.js
// @icon          https://github.com/half-public-tools/antd-spinner-swap/raw/main/icon.png
// @exclude-match *://*/*
// @grant         none
// ==/UserScript==

const main = () => {
    const spinnerUrl = localStorage.getItem('antd-spinner-swap');
    if (!spinnerUrl) return;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = /* css */ `
        .ant-spin-dot {
            background-image: url(${spinnerUrl});
            background-size: contain;

            animation-name: none !important;
            transform: rotate(0) !important;
            scale: 2;

        }
        .ant-spin-dot > * {
            display: none !important;
        }
    `;

    document.body.appendChild(styleTag);
}

main();
