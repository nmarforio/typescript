"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some claculation
        return 8;
    }
}
// interface UU{
//     getreal(): number {
//         return 10
//     }
// } NOOOOOOO possible
// const hello = new TakePhoto("camera", "filter") NOOOOOO cause takePhoto is an abstract class so no new object
class Instragrm extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("bye");
    }
}
const hello = new Instragrm("camera", "filter", 6); // YEEESSS from the extended class
