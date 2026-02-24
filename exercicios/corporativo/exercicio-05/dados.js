export default {
  labels_ordem: ["critico", "normal", "baixo"],
  features_ordem: ["tempo_norm", "tipo_vip", "tipo_standard", "tipo_free", "cat_pagamento", "cat_suporte", "cat_tecnico"],
  bruto: {
    treino: [
      { tempo: 120, tipo: "vip", categoria: "suporte", label: "critico" },
      { tempo: 30, tipo: "standard", categoria: "pagamento", label: "normal" },
      { tempo: 10, tipo: "free", categoria: "tecnico", label: "baixo" },
      { tempo: 90, tipo: "vip", categoria: "pagamento", label: "critico" },
      { tempo: 25, tipo: "standard", categoria: "tecnico", label: "normal" },
      { tempo: 15, tipo: "free", categoria: "suporte", label: "baixo" },
      { tempo: 45, tipo: "standard", categoria: "suporte", label: "normal" },
      { tempo: 110, tipo: "vip", categoria: "tecnico", label: "critico" }
    ],
    teste: [
      { tempo: 12, tipo: "free", categoria: "pagamento", label: "baixo" },
      { tempo: 60, tipo: "standard", categoria: "suporte", label: "normal" },
      { tempo: 100, tipo: "vip", categoria: "suporte", label: "critico" },
      { tempo: 20, tipo: "free", categoria: "tecnico", label: "baixo" }
    ],
    novasAmostras: [
      { tempo: 70, tipo: "standard", categoria: "pagamento" },
      { tempo: 5, tipo: "free", categoria: "suporte" },
      { tempo: 130, tipo: "vip", categoria: "tecnico" },
      { tempo: 35, tipo: "standard", categoria: "tecnico" }
    ]
  }
}
