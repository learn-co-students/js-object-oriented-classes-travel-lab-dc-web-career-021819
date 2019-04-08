class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    return (new Date(endDate).getFullYear() - new Date(this.startDate).getFullYear() + 1);
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
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
    let horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let verticalBlocks = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))

    return horizontalBlocks + verticalBlocks;
  }
  estimatedTime(isPeakTime = false){
    if (isPeakTime){
      return this.blocksTravelled()/2;
    }else{
      return this.blocksTravelled()/3;
    }
  }
}
