var events = require("events");
var eventEmitter = new events.EventEmitter();

var fn = function() {
    console.log("call me. ");
};

// second event handler

var soundAlarm = () => {
    console.log("SOS!! The alarm has been triggered! ");
};

var callCops = () => {
    console.log("Call Emergency services at 911!");
};

eventEmitter
    .on("call", fn)
    .on("call2", soundAlarm)
    .on("call3", callCops);
eventEmitter.emit("call");
eventEmitter.emit("call2");
eventEmitter.emit("call3");
