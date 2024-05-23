

let door = "unknown";

function getDoor()
{
    return door;
}

function setDoor(state)
{
    door = state;
}

exports.getDoor = getDoor;
exports.setDoor = setDoor;