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
// Instructor suggestion
/*
let listaDeEstudantes = [
    {
        nomeDoEstudante: 'Murilo',
        primeiraNota: 6,
        segundaNota: 9,
    },

    {
        nomeDoEstudante: 'Ana',
        primeiraNota: 5,
        segundaNota: 3,
    },

    {
        nomeDoEstudante: 'Sara',
        primeiraNota: 8,
        segundaNota: 8,
    }        
]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}
   

for(let estudante of listaDeEstudantes){
    mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
    let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}       
*/

