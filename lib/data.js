function getData(key) {
    const result = localStorage.getItem(key);
    return JSON.parse(result);
}

function delData(key) {
    return localStorage.removeItem(key);
}

function setData(key, val) {
    const json = JSON.stringify(val);
    return localStorage.setItem(key, json);
}

function drawRandom(array) {
    return array[Math.max(Math.min(Math.floor(Math.random() * array.length), array.length-1), 0)];
}

function double(array) {
    return [...array, ...array];
}