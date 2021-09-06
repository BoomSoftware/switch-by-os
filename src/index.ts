#!/usr/bin/env node

import * as child from 'child_process';
import * as os from 'os';
import { program } from 'commander'

function displayMessage(process: child.ChildProcess) {
    process.stdout?.on(`data`, (data) => {
        console.log(`${data}`);
    });

    process.stderr?.on(`data`, (data) => {
        console.error(`${data}`);
    });
}

function loadScript(command: string) {
    const process = child.exec(command);
    displayMessage(process);
}


program
    .version(`0.0.1`)
    .option(`-w, --windows <command>`, `Windows command`)
    .option(`-l, --linux <command>`, `Linux command`);

program.parse(process.argv);
const options = program.opts();

const platform = os.type();

if(options.windows && platform === `Windows_NT`) {
    loadScript(options.windows);
}

if(options.linux && platform === `Linux`) {
    loadScript(options.windows);
}