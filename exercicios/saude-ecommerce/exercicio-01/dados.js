export default {
  labels_ordem: ["alta", "media", "baixa"],
  features_ordem: ["score_norm", "queixa_respiratoria", "queixa_gastrointestinal", "queixa_trauma", "setor_emergencia", "setor_clinica", "setor_observacao"],
  bruto: {
    treino: [
      { scoreSintomas: 80, queixa: "respiratoria", setor: "emergencia", label: "alta" },
      { scoreSintomas: 45, queixa: "gastrointestinal", setor: "clinica", label: "media" },
      { scoreSintomas: 20, queixa: "trauma", setor: "observacao", label: "baixa" },
      { scoreSintomas: 90, queixa: "respiratoria", setor: "emergencia", label: "alta" },
      { scoreSintomas: 35, queixa: "trauma", setor: "clinica", label: "media" },
      { scoreSintomas: 25, queixa: "gastrointestinal", setor: "observacao", label: "baixa" }
    ],
    teste: [
      { scoreSintomas: 70, queixa: "respiratoria", setor: "emergencia", label: "alta" },
      { scoreSintomas: 30, queixa: "trauma", setor: "observacao", label: "baixa" },
      { scoreSintomas: 50, queixa: "gastrointestinal", setor: "clinica", label: "media" }
    ]
  },
  normalizado: {
    metadados: { min_score: 20, max_score: 90, criterio: "minmax_treino" },
    xs_treino: [
      [0.857, 1, 0, 0, 1, 0, 0],
      [0.357, 0, 1, 0, 0, 1, 0],
      [0.000, 0, 0, 1, 0, 0, 1],
      [1.000, 1, 0, 0, 1, 0, 0],
      [0.214, 0, 0, 1, 0, 1, 0],
      [0.071, 0, 1, 0, 0, 0, 1]
    ],
    ys_treino: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    xs_teste: [
      [0.714, 1, 0, 0, 1, 0, 0],
      [0.143, 0, 0, 1, 0, 0, 1],
      [0.429, 0, 1, 0, 0, 1, 0]
    ],
    ys_teste: [
      [1, 0, 0],
      [0, 0, 1],
      [0, 1, 0]
    ]
  }
}
