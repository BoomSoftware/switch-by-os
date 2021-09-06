#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var child = require("child_process");
var os = require("os");
var commander_1 = require("commander");
function displayMessage(process) {
    var _a, _b;
    (_a = process.stdout) === null || _a === void 0 ? void 0 : _a.on("data", function (data) {
        console.log("" + data);
    });
    (_b = process.stderr) === null || _b === void 0 ? void 0 : _b.on("data", function (data) {
        console.error("" + data);
    });
}
function loadScript(command) {
    var process = child.exec(command);
    displayMessage(process);
}
commander_1.program
    .version("0.0.1")
    .option("-w, --windows <command>", "Windows command")
    .option("-l, --linux <command>", "Linux command");
commander_1.program.parse(process.argv);
var options = commander_1.program.opts();
var platform = os.type();
if (options.windows && platform === "Windows_NT") {
    loadScript(options.windows);
}
if (options.linux && platform === "Linux") {
    loadScript(options.windows);
}
