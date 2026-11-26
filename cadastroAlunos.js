// Lista de alunos cadastrados, com nome e duas notas
const alunos = [
  { nome: "Ana Souza", nota1: 8.5, nota2: 7.0 },
  { nome: "Bruno Oliveira", nota1: 5.0, nota2: 6.5 },
  { nome: "Carla Mendes", nota1: 9.0, nota2: 8.5 }
];

// Calcula a média das duas notas
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

console.log("Cadastro de alunos");
console.log("------------------");

// Percorre cada aluno e mostra o nome, as notas e a média
alunos.forEach(function (aluno) {
  const media = calcularMedia(aluno.nota1, aluno.nota2);

  console.log("Aluno: " + aluno.nome);
  console.log("Notas: " + aluno.nota1 + " e " + aluno.nota2);
  console.log("Média: " + media.toFixed(1));
  console.log("");
});
