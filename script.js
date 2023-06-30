let students = [
  {
    name: "Jonas",
    firstTest: 8,
    secondTest: 7.5,
  },
  {
    name: "Luis",
    firstTest: 5,
    secondTest: 4,
  },
  {
    name: "Amanda",
    firstTest: 10,
    secondTest: 8,
  },
  {
    name: "Bruno",
    firstTest: 2,
    secondTest: 9,
  },
  {
    name: "Maria",
    firstTest: 10,
    secondTest: 10,
  },
  {
    name: "Luisa",
    firstTest: 7,
    secondTest: 9,
  },
];

for (let student of students) {
  let media = (student.firstTest + student.secondTest) / 2;
  if (media >= 7){
    alert(`A média do aluno ${student.name} é ${media}\nParabéns ${student.name}! Você foi aprovado 😉`);
  }else{
    alert(
      `A média do aluno ${student.name} é ${media}\nNão foi dessa vez ${student.name}! Tente de novo. 😔`
    );

  }
}
