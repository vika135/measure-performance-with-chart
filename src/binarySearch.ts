export function binarySearch<T>(cb: (elem: T) => number, data: T[], startIdx: number, endIdx: number): T {
    let middleIdx = Math.floor((startIdx + (endIdx - startIdx)/2));
    let middleElem: T = data[middleIdx];

    if (cb(middleElem) === 0) { return middleElem }
    else {
        return cb(middleElem) === -1
            ? binarySearch(cb, data, startIdx, middleIdx) : binarySearch(cb, data, middleIdx, endIdx)
    }
}