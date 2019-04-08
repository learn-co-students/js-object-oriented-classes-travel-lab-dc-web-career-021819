"use strict"
class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))

    return vertical + horizontal;
  }

  estimatedTime(peak = false){
    // debugger
    //off-peak hours a driver travels 3 blocks a minute
    //during peak a driver travels 2 blocks a minute
    if(peak){
      return this.blocksTravelled() / 2
    }
    else{
      return this.blocksTravelled() / 3
    }
  }
}
