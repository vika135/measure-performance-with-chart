import { binarySearch } from "./binarySearch";

export interface ChartResultData<R = number, L = number> {
    labels: L[];
    results: R[]
}

interface Element {
    qwerty: string,
    value: number
}

export function measurePerformance(): ChartResultData {
    let data: Element[] = [];
    let result: ChartResultData = { labels: [], results: [] };

    for (let i: number = 10000; i <= 1e6; i+=10000) {
        data = Array.from({length: i}, () => {
            return {
                qwerty: "vika",
                value: Math.floor(Math.random() * i)
            }
        });

        const randomIdx: number = Math.floor(Math.random() * i);
        let elemToFind: number = data[randomIdx].value;

        const t0Find: number = performance.now();
        data.find(elem => elem.value === elemToFind);
        const t1Find: number = performance.now();

        const findTimeDiff: number = t1Find - t0Find;

        const t0BinarySearch: number = performance.now();
        data.sort((a,b) => a.value - b.value);
        binarySearch((elem: Element) => elem.value === elemToFind ? 0 : (elemToFind > elem.value ? 1 : -1), data, 0, data.length);
        const t1BinarySearch: number = performance.now();

        const binarySearchTimeDiff: number = t1BinarySearch - t0BinarySearch;

        let ratio: number = +(findTimeDiff/binarySearchTimeDiff).toFixed(4);
        if (!!findTimeDiff && !!binarySearchTimeDiff) {
            result.labels.push(i);
            result.results.push(ratio);
        }
    }

    return result;
}