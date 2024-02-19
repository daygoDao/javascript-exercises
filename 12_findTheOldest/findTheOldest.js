const findTheOldest = function(people) {
  let eldest = people[0];
  for(let person of people){
    const personAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
    const eldestAge = (eldest.yearOfDeath || new Date().getFullYear()) - eldest.yearOfBirth;
    if(personAge > eldestAge){
      eldest = person;
    }
  }
  return eldest;
};

// Do not edit below this line
module.exports = findTheOldest;
