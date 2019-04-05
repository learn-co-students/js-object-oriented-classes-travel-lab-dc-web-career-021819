
class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.begin = beginningLocation
    this.end = endingLocation
    this.eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

  }
  blocksTravelled(){
    let verticalDistance =
    Math.abs(parseInt(this.begin["vertical"]) - parseInt(this.end["vertical"]))
    let horizontalDistance = Math.abs(this.eastWest.indexOf(this.begin["horizontal"]) - this.eastWest.indexOf(this.end["horizontal"]))
    return horizontalDistance + verticalDistance
  }

  estimatedTime(peak){
    let coefficient
    if (peak) {
      coefficient = 2
    } else {
      coefficient = 3
    }
    return this.blocksTravelled() / coefficient
  }
}
