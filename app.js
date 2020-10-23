const https = require('https');
var express = require("express");
var app = express();

const os = require('os');

const cpus = os.cpus();
const cpu = cpus[0];
const total = Object.values(cpu.times).reduce(
    (acc, tv) => acc + tv, 0
);
const usage = process.cpuUsage();
const currentCPUUsage = (usage.user + usage.system) * 1000;
const perc = currentCPUUsage / total * 100;


app.listen(3000, () => {
    console.log(`CPU Usage (%): ${perc}`);
});
