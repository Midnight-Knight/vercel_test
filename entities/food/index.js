let kg = "unknown";
const h = 16.1;
const d = 7.5;
const V = (h * Math.PI * Math.pow(d,2)) / 4;

function getKg() {
    return kg;
}

function setKg(cm){
    kg = cm;
}

function getFullKg() {
    return Number((V / 1000).toFixed(5));
}

exports.getKg = getKg;
exports.setKg = setKg;
exports.getFullKg = getFullKg;