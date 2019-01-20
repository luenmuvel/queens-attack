interface Parameters {
  white: number[],
  black: number[],
}
class QueenAttack {
  public white: Array<number>;
  public black: Array<number>;

  constructor(attack: Parameters) {
    if (JSON.stringify(attack.white) === JSON.stringify(attack.black)) {
      throw 'Queens cannot share the same space';
    }
    this.white = attack.white;
    this.black = attack.black;
  }

  toString() {
    let Tablero = [];
    for (let i = 0; i < 8; i++) {
      Tablero.push(new Array(8).fill('_'));
    }
    Tablero[this.white[0]][this.white[1]] = 'W';
    Tablero[this.black[0]][this.black[1]] = 'B';
    Tablero = Tablero.map((ele: string[]) => {
      return ele.join(' ');
    });
    Tablero[7] = Tablero[7] + '\n';
    return Tablero.join('\n');
  }

  canAttack() {
    const numbers: Array<Array<number>> = this.generateNumbers(this.white[0], this.white[1]);
    return numbers.find((ele: number[]) => {
      return JSON.stringify(ele) === JSON.stringify(this.black);
    }) !== undefined;
  }

  generateNumbers(fil: number, col: number) {
    const arrX1 = fil > col ? this.makeNumbersAxis1(col, fil, 'L') : col == fil ? this.makeNumbersAxis1(fil, col, 'L') : this.makeNumbersAxis1(fil, col, 'R');
    const arrX2 = fil > col ? this.makeNumbersAxis2(col, fil, 'L') : col == fil ? this.makeNumbersAxis2(fil, col, 'L') : this.makeNumbersAxis2(fil, col, 'R');
    const arrX3 = this.getCross(fil, col);
    return [...arrX1, ...arrX2, ...arrX3];
  }

  makeNumbersAxis1(min: number, max: number, type: string) {
    let minL = min;
    let maxL = max;
    const arr = [];
    while (minL > 0) {
      maxL--;
      minL--;
      arr.push(type === 'L' ? [maxL, minL] : [minL, maxL]);
    }

    minL = min;
    maxL = max;

    while (maxL <= 7) {
      arr.push(type === 'L' ? [maxL, minL] : [minL, maxL]);
      maxL++;
      minL++;
    }

    return arr;
  }

  makeNumbersAxis2(min: number, max: number, type: string) {
    let minL = min;
    let maxL = max;
    const arr = [];

    while (maxL < 7 && minL > 0) {
      maxL++;
      minL--;
      arr.push(type === 'L' ? [maxL, minL] : [minL, maxL]);
    }

    minL = min;
    maxL = max;

    while (minL < 7 && maxL > 0) {
      maxL--;
      minL++;
      arr.push(type === 'L' ? [maxL, minL] : [minL, maxL]);
    }

    return arr;
  }
  getCross(fil: number, col: number) {
    const arr1 = []
    const arr2 = []
    for (let i = 0; i <= 7; i++) {
      arr1.push([i, col]);
      arr2.push([fil, i]);
    }
    return [...arr1, ...arr2];
  }

}

export default QueenAttack