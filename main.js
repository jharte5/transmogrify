const biggify = function(num) {
  return num += 9000
}

const nasafy = function(num) {
  const results = []
  let now = num
  while (1 <= now) {
    results.push(now);
    now--;
  } 
  results.push('Blast off!')
  return results
}

const reversify = function(str) {
  return str.split('').reverse().join('')
}

const titleify = function(str) {
  return str.split()
}

const crazify = function(str) {
  
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}