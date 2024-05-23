let waterEnough = "unknown";

function getWaterLevel() {
    return waterEnough;
}

function setWaterLevel(state){
    waterEnough = state;
}

exports.getWaterLevel = getWaterLevel;
exports.setWaterLevel = setWaterLevel;