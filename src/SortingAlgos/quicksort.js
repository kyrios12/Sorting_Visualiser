export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx >= endIdx) return;
    const pivotIdx = partition(mainArray, startIdx, endIdx, auxiliaryArray, animations);
    quickSortHelper(mainArray, startIdx, pivotIdx - 1, auxiliaryArray, animations);
    quickSortHelper(mainArray, pivotIdx + 1, endIdx, auxiliaryArray, animations);
}

function partition(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    const pivot = mainArray[endIdx];
    let i = startIdx - 1;

    for (let j = startIdx; j < endIdx; j++) {
        if (mainArray[j] <= pivot) {
            i++;
            animations.push([i, j]); // Color change
            animations.push([i, j]); // Revert color
            swap(mainArray, i, j);
        }
    }
    animations.push([i + 1, endIdx]); // Color change
    animations.push([i + 1, endIdx]); // Revert color
    swap(mainArray, i + 1, endIdx);
    return i + 1;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
