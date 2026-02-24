export default {
  labels_ordem: ["enterprise", "smb", "individual"],
  features_ordem: ["faturamento_norm", "setor_tecnologia", "setor_varejo", "setor_servicos", "reg_norte", "reg_sul", "reg_centro"],
  bruto: {
    treino: [
      { faturamento: 120, setor: "tecnologia", regiao: "norte", label: "smb" },
      { faturamento: 900, setor: "varejo", regiao: "sul", label: "enterprise" },
      { faturamento: 300, setor: "servicos", regiao: "centro", label: "individual" },
      { faturamento: 1000, setor: "tecnologia", regiao: "norte", label: "enterprise" },
      { faturamento: 150, setor: "varejo", regiao: "sul", label: "individual" },
      { faturamento: 600, setor: "servicos", regiao: "centro", label: "smb" }
    ],
    teste: [
      { faturamento: 400, setor: "varejo", regiao: "centro", label: "smb" },
      { faturamento: 980, setor: "tecnologia", regiao: "sul", label: "enterprise" },
      { faturamento: 200, setor: "servicos", regiao: "norte", label: "individual" }
    ]
  },
  normalizado: {
    metadados: { min_faturamento: 120, max_faturamento: 1000, criterio: "minmax_treino" },
    xs_treino: [
      [0.000, 1, 0, 0, 1, 0, 0],
      [0.886, 0, 1, 0, 0, 1, 0],
      [0.205, 0, 0, 1, 0, 0, 1],
      [1.000, 1, 0, 0, 1, 0, 0],
      [0.034, 0, 1, 0, 0, 1, 0],
      [0.545, 0, 0, 1, 0, 0, 1]
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
      [0.318, 0, 1, 0, 0, 0, 1],
      [0.977, 1, 0, 0, 0, 1, 0],
      [0.091, 0, 0, 1, 1, 0, 0]
    ],
    ys_teste: [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ]
  }
}
