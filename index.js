/* ---- 
- multi set of ints of size N
  - not unique
- divide it into K subsets in such a way that the sum has to be as "similar" as possible
*/

// Constants
const N = 1000 // size of multiset
const K = 5 // number of subsets
const UPPER_BOUND = 100 // largest possible value in set

// Helper functions
function indexOfSmallest(a) {
  var lowest = 0
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[lowest]) lowest = i
  }
  return lowest
}

function createMultiSet(n) {  // create a random multiset of size n
  let set = []

  for (let i = 0; i < n; i++) {
    set.push(Math.floor(Math.random() * (UPPER_BOUND)))
  }

  return set
}

// Main
const aMultiSet = createMultiSet(N) // create a random multiset

aMultiSet.sort().reverse() // sort the multiset in descending order

const subSets = []
const subSetSums = []

for (let i = 0; i < K; ++i) {
  subSets[i] = []  // create subset 
  subSetSums[i] = 0 // initialize sum of subset
}

aMultiSet.forEach((v, i) => { // loop through multiset
  const j = indexOfSmallest(subSetSums) // find the smallest sum
  subSets[j].push(v) // add the value to the subset with the smallest sum
  subSetSums[j] += v // update the sum of the subset
  
})

// Outputs
console.log(`N = ${N}, K = ${K}`)
console.log(`MultiSet of size ${N}`, aMultiSet)
console.log(`${K} subSets:`, subSets)
console.log(`Sums of each subset:`, subSetSums)
const avgSum = subSetSums.reduce((a, b) => a + b) / K
console.log(`Average sum of each subset: ${avgSum}`)

subSetSums.forEach((v, i) => {
  console.log(`Difference between average and sum of subset ${i}: ${Math.abs(avgSum - v)}`)
})