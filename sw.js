/* global importScripts, workbox */

'use strict';

importScripts('/assets/workbox-v5.1.4/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: '/assets/workbox-v5.1.4/'
});

const {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst
} = workbox.strategies;
const {
    registerRoute
} = workbox.routing;
const {
    ExpirationPlugin
} = workbox.expiration;



registerRoute('/', new NetworkFirst({
    "cacheName": "index",
    "plugins": []
}), 'GET');
registerRoute(/\.(?:js|css)$/, new StaleWhileRevalidate({
    "cacheName": "js-css",
    "plugins": []
}), 'GET');
registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new CacheFirst({
    "cacheName": "images",
    "plugins": [new ExpirationPlugin({
        "maxEntries": 60,
        "maxAgeSeconds": 2592000
    })]
}), 'GET');

workbox.googleAnalytics.initialize();