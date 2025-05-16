function getAge(person) {
    // gets current year IF deathYear is nullish
    const deathYear = person.yearOfDeath ?? new Date().getFullYear();
    return deathYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
  if (!people.length) return null; // if there are no people, return null
  
  return people.reduce((oldest, current) => {
    return getAge(current) > getAge(oldest) ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
