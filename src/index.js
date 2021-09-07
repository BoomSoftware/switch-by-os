#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var minimist = require("minimist");
var os = require("os");
var child_process_1 = require("child_process");
var SEPARATOR = /!/g;
var options = minimist(process.argv.splice(2));
var platform = os.type();
function displayMessage(process) {
    var _a, _b;
    (_a = process.stdout) === null || _a === void 0 ? void 0 : _a.on("data", function (data) {
        console.log(data);
    });
    (_b = process.stderr) === null || _b === void 0 ? void 0 : _b.on("data", function (data) {
        console.error(data);
    });
}
function loadScript(command) {
    command = command.replace(SEPARATOR, " ");
    var process = (0, child_process_1.exec)(command);
    displayMessage(process);
}
if (options.windows && platform === "Windows_NT") {
    loadScript(options.windows);
}
if (options.linux && platform === "Linux") {
    loadScript(options.windows);
}
