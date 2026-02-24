// Dados brutos (sem normalização e sem one-hot) para o exemplo de alunos
// Categorias: premium, medium, basic
export default {
  treino: [
    // idade, cor, localizacao, label
    { idade: 22, cor: "azul", localizacao: "sul", label: "medium" },
    { idade: 35, cor: "vermelho", localizacao: "norte", label: "premium" },
    { idade: 27, cor: "verde", localizacao: "centro", label: "basic" },
    { idade: 50, cor: "azul", localizacao: "norte", label: "premium" },
    { idade: 19, cor: "vermelho", localizacao: "sul", label: "basic" },
    { idade: 33, cor: "verde", localizacao: "centro", label: "medium" }
  ],
  teste: [
    { idade: 29, cor: "vermelho", localizacao: "centro", label: "medium" },
    { idade: 50, cor: "azul", localizacao: "sul", label: "premium" },
    { idade: 24, cor: "verde", localizacao: "norte", label: "basic" }
  ]
}
