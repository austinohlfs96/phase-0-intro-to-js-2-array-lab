// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push('Ralph');
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name) {
  return cats.unshift('Bob');
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat() {
  return cats.pop();
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat() {
  return cats.shift();
};



function appendCat(name) {
  const moreCats =  () => [...cats, "Broom"]
  return moreCats();
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function prependCat(name) {
  const moreCats = () => ["Arnold", ...cats]
  return moreCats();
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function removeLastCat() {
  const lessCats = () => cats.slice(0,-1);
  return lessCats();
};

function removeFirstCat() {
const lessCats = () => cats.slice(1);
return lessCats();
};

