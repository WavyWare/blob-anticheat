export class Tools {
    static chance(percent: number) {
        return (Math.random() * 100 + 1) <= percent;
    }
}