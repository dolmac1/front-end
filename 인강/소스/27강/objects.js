// function getSound(animal) {
//   if (animal === "개") return "멍멍";
//   if (animal === "고양이") return "야옹";
//   if (animal === "참새") return "짹짹";
//   if (animal === "말") return "히잉";
//   if (animal === "다람쥐") return "찍찍";
// }

function getSound(animal) {
    const sounds = {
      개: "멍멍",
      고양이: "야옹",
      참새: "짹짹",
      말: "히잉",
      다람쥐: "찍찍"
    };
    return sounds[animal] || "...?";
  }
  
  console.log(getSound("개"));
  console.log(getSound("말"));
  console.log(getSound("코뿔소"));
  