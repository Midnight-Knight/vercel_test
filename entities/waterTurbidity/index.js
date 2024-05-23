let waterEnough = "unknown";

function getWaterTurbidity() {
    return waterEnough;
}

function setWaterTurbidity(state){
    waterEnough = state;
}

exports.getWaterTurbidity = getWaterTurbidity;
exports.setWaterTurbidity = setWaterTurbidity;