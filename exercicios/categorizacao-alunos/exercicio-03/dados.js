export default {
  labels_ordem: ["premium", "medium", "basic"],
  features_ordem: ["idade_norm", "cor_vermelho", "cor_verde", "cor_azul", "loc_norte", "loc_sul", "loc_centro"],
  bruto: {
    treino: [
      { idade: 21, cor: "vermelho", local: "norte", label: "basic" },
      { idade: 26, cor: "azul", local: "sul", label: "medium" },
      { idade: 32, cor: "verde", local: "centro", label: "basic" },
      { idade: 38, cor: "vermelho", local: "norte", label: "premium" },
      { idade: 41, cor: "azul", local: "centro", label: "premium" },
      { idade: 23, cor: "verde", local: "sul", label: "medium" },
      { idade: 29, cor: "vermelho", local: "centro", label: "medium" },
      { idade: 45, cor: "verde", local: "norte", label: "premium" }
    ],
    teste: [
      { idade: 27, cor: "azul", local: "sul", label: "basic" },
      { idade: 35, cor: "verde", local: "centro", label: "medium" },
      { idade: 52, cor: "vermelho", local: "norte", label: "premium" },
      { idade: 24, cor: "azul", local: "centro", label: "basic" }
    ]
  }
}
