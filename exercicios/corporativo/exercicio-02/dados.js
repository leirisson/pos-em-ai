export default {
  labels_ordem: ["quente", "morno", "frio"],
  features_ordem: ["engajamento_norm", "origem_organico", "origem_pago", "origem_referral", "pais_brasil", "pais_mexico", "pais_chile"],
  bruto: {
    treino: [
      { engajamento: 30, origem: "organico", pais: "brasil", label: "frio" },
      { engajamento: 55, origem: "pago", pais: "mexico", label: "morno" },
      { engajamento: 80, origem: "referral", pais: "chile", label: "quente" },
      { engajamento: 90, origem: "organico", pais: "brasil", label: "quente" },
      { engajamento: 20, origem: "pago", pais: "chile", label: "frio" },
      { engajamento: 60, origem: "referral", pais: "brasil", label: "morno" }
    ],
    teste: [
      { engajamento: 45, origem: "organico", pais: "mexico", label: "morno" },
      { engajamento: 85, origem: "pago", pais: "brasil", label: "quente" },
      { engajamento: 25, origem: "referral", pais: "chile", label: "frio" }
    ]
  },
  normalizado: {
    metadados: { min_engajamento: 20, max_engajamento: 90, criterio: "minmax_treino" },
    xs_treino: [
      [0.143, 1, 0, 0, 1, 0, 0],
      [0.500, 0, 1, 0, 0, 1, 0],
      [0.857, 0, 0, 1, 0, 0, 1],
      [1.000, 1, 0, 0, 1, 0, 0],
      [0.000, 0, 1, 0, 0, 0, 1],
      [0.571, 0, 0, 1, 1, 0, 0]
    ],
    ys_treino: [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 1],
      [0, 1, 0]
    ],
    xs_teste: [
      [0.357, 1, 0, 0, 0, 1, 0],
      [0.929, 0, 1, 0, 1, 0, 0],
      [0.071, 0, 0, 1, 0, 0, 1]
    ],
    ys_teste: [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ]
  }
}
