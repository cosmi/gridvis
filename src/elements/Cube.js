export default class Cube {
  constructor(p1, p2) {
    
    if(!(Array.isArray(p1) && Array.isArray(p2))) throw "Please pass arrays";
    if(p1.length === 0) throw "Cube has to have positive dimension"
    if(p1.length !== p2.length) throw "Incompatible dimensions";

    this.p1 = p1;
    this.p2 = p2;
  }

  get dims() {
    return this.p1.length;
  }
  get volume() {
    var dims = this.dims;
    var volume = 1.;
    var p1 = this.p1;
    var p2 = this.p2;
    for (let i = 0; i<dims; i++) {
      volume *= p2[i] - p1[i];
    }
    return volume;
  }
}