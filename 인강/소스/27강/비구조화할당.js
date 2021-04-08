//object

const object = { a: 1, b: 2 };

const { a, b = 2 } = object;
console.log(a);
console.log(b);

//배열

const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

//깊은곳에 있는 값 가져오기

const deepObject = {
  state: {
    information: {
      name: "chovy",
      languages: ["c", "c++"]
    }
  },
  value: 5
};

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

console.log(value);
console.log(deepObject.state.information);
