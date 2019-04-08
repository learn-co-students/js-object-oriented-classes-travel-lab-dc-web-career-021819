let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date (year, 1, 1)
    let totalYears = (endDate - this.startDate) / (365*24*60*60*1000)
    return parseInt(totalYears)
  }

}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger (avenue) {
    // look through the array to find & return the index of this avenue.
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    // set the horizontalDistance
    let horizontalDistance =
      //take the horizontal attribute and use the above function to return an int
      this.avenueToInteger(this.endingLocation.horizontal) -
      //take the horizontal attribute and use the above function to return an int
      this.avenueToInteger(this.beginningLocation.horizontal)

    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical

    return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
  }

  estimatedTime (peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
