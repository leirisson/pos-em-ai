export default {
  labels_ordem: ["premium", "medium", "basic"],
  features_ordem: ["idade_norm", "cor_vermelho", "cor_verde", "cor_azul", "loc_norte", "loc_sul", "loc_centro"],
  bruto: {
    treino: [
      { idade: 25, cor: "vermelho", local: "centro", label: "medium" },
      { idade: 27, cor: "verde", local: "norte", label: "basic" },
      { idade: 31, cor: "azul", local: "sul", label: "medium" },
      { idade: 39, cor: "vermelho", local: "norte", label: "premium" },
      { idade: 42, cor: "verde", local: "centro", label: "premium" },
      { idade: 21, cor: "azul", local: "centro", label: "basic" },
      { idade: 36, cor: "verde", local: "sul", label: "medium" },
      { idade: 49, cor: "vermelho", local: "norte", label: "premium" }
    ],
    teste: [
      { idade: 28, cor: "azul", local: "centro", label: "basic" },
      { idade: 33, cor: "verde", local: "sul", label: "medium" },
      { idade: 45, cor: "vermelho", local: "norte", label: "premium" },
      { idade: 23, cor: "verde", local: "centro", label: "basic" }
    ],
    novasAmostras: [
      { idade: 22, cor: "vermelho", local: "sul" },
      { idade: 37, cor: "azul", local: "norte" },
      { idade: 29, cor: "verde", local: "centro" },
      { idade: 50, cor: "vermelho", local: "centro" }
    ]
  }
}
