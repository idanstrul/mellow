
export const utilService = {
    delay,
    getRndIntInc,
    makeId,
    getRandomColor,
    applyDrag,
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRndIntInc(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function applyDrag(arr, dragResult) {
    console.log(dragResult);
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
    const result = [...arr];
    let itemToAdd = payload;
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}