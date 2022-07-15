"use strict";

const person = {
  name: "Alex",
  tel: "+74444444",
  parents: {
    mom: "olga",
    dad: "mike",
  },
};
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "Ann";
console.log(person);
console.log(clone);
console.log(JSON.parse(JSON.stringify(person)));
console.log(JSON.stringify(person));
