class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - parseInt(this.startDate.getFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ["1st Avenue", "2nd Avenue", "3rd Avenue", "Lexington Avenue", "Park", "Madison Avenue", "5th Avenue"];

    return this.calcDistance(eastWest);
  }

  calcDistance(eastWest) {
    const horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalDistance + verticalDistance;
  }

  estimatedTime(peak = false) {
    const b = this.blocksTravelled();

    return peak ? b / 2 : b / 3;
  }
}
