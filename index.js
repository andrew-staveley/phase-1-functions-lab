let start = 43
let destination = 44

distanceFromHqInBlocks(start);
distanceFromHqInFeet(start);

function distanceFromHqInBlocks(blocks) {
    let blockDistance;
    if (blocks >= 42) {
        blockDistance = (blocks - 42);
        return blockDistance;
    } else if (blocks < 42) {
        blockDistance = (42 - blocks);
        return blockDistance;
    } else {
        return 'Please put in a number';
    }
}

function distanceFromHqInFeet(blocks) {
    let feetDistance = distanceFromHqInBlocks(blocks) * 264;
    return feetDistance;
}

function distanceTravelledInFeet(start, destination) {
    let travelledDistanceBlocks;
    if (start > destination) {
        travelledDistanceBlocks = (start - destination);
    } else if (start < destination) {
        travelledDistanceBlocks = (destination - start);
    } else {
        return `Please travel a valid distance`;
    }
    let travelledDistanceFeet = (travelledDistanceBlocks * 264)
    return travelledDistanceFeet;
}

function calculatesFarePrice(start, destination) {
    let travelledDistanceBlocks;
    if (start > destination) {
        travelledDistanceBlocks = (start - destination);
    } else if (start < destination) {
        travelledDistanceBlocks = (destination - start);
    } else {
        return `Please travel a valid distance`;
    }
    let travelledDistanceFeet = (travelledDistanceBlocks * 264);
    if (travelledDistanceFeet <= 400) {
        return 0;
    } else if (travelledDistanceFeet >= 401 && travelledDistanceFeet <= 2000) {
        let travelCost = ((travelledDistanceFeet - 400) * 0.02)
        return travelCost;
    } else if (travelledDistanceFeet >= 2001 && travelledDistanceFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}