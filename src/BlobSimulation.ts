import {Blob} from "./Blob";
import {Tools} from "./Tools";

export class BlobSimulation {
    blobs: Blob[];
    chanceForCheater: number;
    numberOfFlips: number;
    amountOfBlobs: number;

    constructor(chanceForCheater: number, numberOfFlips: number, amountOfBlobs: number) {
        this.blobs = [];
        this.chanceForCheater = chanceForCheater;
        this.numberOfFlips = numberOfFlips;
        this.amountOfBlobs = amountOfBlobs;
    }

    createBlobs() {
        for (let i = 0; i < this.amountOfBlobs; i++) {
            this.blobs.push(new Blob(i, Tools.chance(this.chanceForCheater)));
        }
    }

    flipBlobsCoin(blobs: Blob[]) {
        for (let i = 0; i < blobs.length; i++) {
            blobs[i].flip(this.numberOfFlips)
        }
    }

    runAntiCheat(blobs: Blob[]) {
        for (let i = 0; i < blobs.length; i++) {
            if (blobs[i].headsPercent() > 60) {
                blobs[i].prediction = 'cheater';
            }
        }
    }

    printResult(blobs: Blob[]) {
        let falseNegatives = 0;
        let falsePositives = 0;
        let trueNegatives = 0;
        let truePositives = 0;
        for (let i = 0; i < blobs.length; i++) {
            if (blobs[i].prediction == "cheater" && blobs[i].isCheater) truePositives += 1;
            if (blobs[i].prediction == "cheater" && !blobs[i].isCheater) falsePositives += 1;
            if (blobs[i].prediction == "fair" && blobs[i].isCheater) falseNegatives += 1;
            if (blobs[i].prediction == "fair" && !blobs[i].isCheater) trueNegatives += 1;
        }
        console.log(`Fair blobs predicted to be fair: ${trueNegatives} (${trueNegatives/blobs.length*100}%)`);
        console.log(`Fair blobs predicted to be cheater: ${falsePositives} (${falsePositives/blobs.length*100}%)`);
        console.log(`Cheater blobs predicted to be fair: ${falseNegatives} (${falseNegatives/blobs.length*100}%)`);
        console.log(`Cheater blobs predicted to be cheater: ${truePositives} (${truePositives/blobs.length*100}%)`);
    }

    run() {
        this.createBlobs();
        this.flipBlobsCoin(this.blobs);
        this.runAntiCheat(this.blobs);
        this.printResult(this.blobs);
    }
}