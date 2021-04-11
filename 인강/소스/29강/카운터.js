const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
  console.log("+가 클릭됨");
};

minus.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
  console.log("-가 클릭됨");
};
