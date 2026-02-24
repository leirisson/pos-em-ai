export default {
  labels_ordem: ["premium", "medium", "basic"],
  features_ordem: ["idade_norm", "cor_vermelho", "cor_verde", "cor_azul", "loc_norte", "loc_sul", "loc_centro"],
  bruto: {
    treino: [
      { idade: 22, cor: "azul", local: "sul", label: "medium" },
      { idade: 35, cor: "vermelho", local: "norte", label: "premium" },
      { idade: 27, cor: "verde", local: "centro", label: "basic" },
      { idade: 50, cor: "azul", local: "norte", label: "premium" },
      { idade: 19, cor: "vermelho", local: "sul", label: "basic" },
      { idade: 33, cor: "verde", local: "centro", label: "medium" }
    ],
    teste: [
      { idade: 29, cor: "vermelho", local: "centro", label: "medium" },
      { idade: 50, cor: "azul", local: "sul", label: "premium" },
      { idade: 24, cor: "verde", local: "norte", label: "basic" }
    ]
  },
  normalizado: {
    metadados: { min_idade: 19, max_idade: 50, criterio: "minmax_treino" },
    xs_treino: [
      [0.097, 0, 0, 1, 0, 1, 0],
      [0.516, 1, 0, 0, 1, 0, 0],
      [0.258, 0, 1, 0, 0, 0, 1],
      [1.000, 0, 0, 1, 1, 0, 0],
      [0.000, 1, 0, 0, 0, 1, 0],
      [0.452, 0, 1, 0, 0, 0, 1]
    ],
    ys_treino: [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
      [0, 0, 1],
      [0, 1, 0]
    ],
    xs_teste: [
      [0.323, 1, 0, 0, 0, 0, 1],
      [1.000, 0, 0, 1, 0, 1, 0],
      [0.161, 0, 1, 0, 1, 0, 0]
    ],
    ys_teste: [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ]
  }
}
