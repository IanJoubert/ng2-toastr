"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);