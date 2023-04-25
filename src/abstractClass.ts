abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void; // using abstract it must be like it is define

  getReelTime(): number {
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
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("bye");
  }
}
const hello = new Instragrm("camera", "filter", 6); // YEEESSS from the extended class
