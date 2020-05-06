/*
https://www.youtube.com/watch?v=qqznbb9xJa4 code along practice
https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

//v1
function v1friend(friends){
  //store trueFriends array
  const trueFriends = [];
  // iterate over friends
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i]
    //if friend name is length 4, 
    if (friend.length === 4) {
      // push into array
      trueFriends.push(friend)
    }
        }
    return trueFriends
    }

//v2 using forEach
function v2friend(friends){
  //store trueFriends array
  const trueFriends = [];
  // iterate over friends
  friends.forEach(friend => {
    if(friend.length === 4) {
      trueFriends.push(friend)
    }
  })
  return trueFriends
}

//v3 using a filter (whatever evaluates to true will be returned)
function friend(friends){
  return friends.filter(friend => {
    return friend.length === 4
    })
}

//v3 cleaned up
function friend(friends){
  return friends.filter(friend => friend.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
