export default {
  labels_ordem: ["premium", "medium", "basic"],
  features_ordem: ["idade_norm", "cor_vermelho", "cor_verde", "cor_azul", "loc_norte", "loc_sul", "loc_centro"],
  bruto: {
    treino: [
      { idade: 20, cor: "verde", local: "sul", label: "basic" },
      { idade: 22, cor: "azul", local: "centro", label: "basic" },
      { idade: 28, cor: "vermelho", local: "norte", label: "basic" },
      { idade: 30, cor: "verde", local: "norte", label: "basic" },
      { idade: 31, cor: "vermelho", local: "sul", label: "basic" },
      { idade: 35, cor: "azul", local: "centro", label: "basic" },
      { idade: 33, cor: "verde", local: "sul", label: "medium" },
      { idade: 41, cor: "vermelho", local: "centro", label: "medium" },
      { idade: 45, cor: "azul", local: "norte", label: "premium" },
      { idade: 55, cor: "verde", local: "centro", label: "premium" }
    ],
    teste: [
      { idade: 26, cor: "azul", local: "sul", label: "basic" },
      { idade: 37, cor: "vermelho", local: "norte", label: "medium" },
      { idade: 48, cor: "verde", local: "centro", label: "premium" },
      { idade: 29, cor: "verde", local: "norte", label: "basic" }
    ]
  }
}
