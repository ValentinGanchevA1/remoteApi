export const sumArraysWithoutDupes = (arrayA, arrayB) => {
    return arrayA.concat(arrayB.filter(element => !arrayA.includes(element)))
}

export const removeAllFromArray = (arrayA, arrayB) => {
    return arrayA.filter(element => !arrayB.includes(element));
}

export const commonPartOfArrays = (arrayA, arrayB) => {
    return arrayA.filter(element => arrayB.includes(element));
}