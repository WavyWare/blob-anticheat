import {Tools} from "./Tools";

export class Blob {
    id: number;
    isCheater: boolean;
    flips: string[];
    headsChance: number;
    prediction: 'cheater' | 'fair';

    constructor(id: number, isCheater: boolean) {
        this.id = id;
        this.isCheater = isCheater;
        this.flips = [];
        this.headsChance = isCheater ? 75 : 50;
        this.prediction = 'fair';
    }

    flip(amount: number) {
        for (let i = 0; i < amount; i++) {
            Tools.chance(this.headsChance) ? this.flips.push('H') : this.flips.push('T')
        }
    }

    headsPercent() {
        return this.flips.filter((item): item is 'H' => item == 'H').length/this.flips.length*100;
    }


}