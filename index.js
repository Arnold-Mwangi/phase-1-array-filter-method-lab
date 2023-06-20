// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  function fuzzyMatch (drivers, letter){
    return drivers.filter(driver => 
        driver.startsWith(letter))
  }

  function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
  }