// Lista de alunos cadastrados, com nome e duas notas
const alunos = [
  { nome: "Ana Souza", nota1: 8.5, nota2: 7.0 },
  { nome: "Bruno Oliveira", nota1: 5.0, nota2: 6.5 },
  { nome: "Carla Mendes", nota1: 9.0, nota2: 8.5 },
  { nome: "Diego Santos", nota1: 11, nota2: 7.0 }
];

// Calcula a média das duas notas
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// Verifica se a nota é um número válido entre 0 e 10
function notaValida(nota) {
  if (typeof nota !== "number" || isNaN(nota)) {
    return false;
  }

  if (nota < 0 || nota > 10) {
    return false;
  }

  return true;
}

// Informa se o aluno foi aprovado ou reprovado
function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("Cadastro de alunos");
console.log("------------------");

// Percorre cada aluno e mostra o resultado da avaliação
alunos.forEach(function (aluno) {
  if (!notaValida(aluno.nota1) || !notaValida(aluno.nota2)) {
    console.log("Aluno: " + aluno.nome);
    console.log("Notas: " + aluno.nota1 + " e " + aluno.nota2);
    console.log("Não foi possível avaliar este aluno, pois há nota inválida.");
    console.log("");
    return;
  }

  const media = calcularMedia(aluno.nota1, aluno.nota2);
  const situacao = verificarSituacao(media);

  console.log("Aluno: " + aluno.nome);
  console.log("Notas: " + aluno.nota1 + " e " + aluno.nota2);
  console.log("Média: " + media.toFixed(1));
  console.log("Situação: " + situacao);
  console.log("");
});
