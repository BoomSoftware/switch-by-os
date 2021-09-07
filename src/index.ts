#!/usr/bin/env node

import * as minimist from 'minimist';
import * as os from 'os';

import { ChildProcess, exec } from 'child_process';

const SEPARATOR = /!/g;
const options = minimist(process.argv.splice(2));
const platform = os.type();

function displayMessage(process: ChildProcess) {
    process.stdout?.on(`data`, (data) => {
        console.log(data);
    });

    process.stderr?.on(`data`, (data) => {
        console.error(data);
    });
}

function loadScript(command: string) {
    command = command.replace(SEPARATOR, ` `);
    const process = exec(command);
    displayMessage(process);
}

if(options.windows && platform === `Windows_NT`) {
    loadScript(options.windows);
}

if(options.linux && platform === `Linux`) {
    loadScript(options.windows);
}