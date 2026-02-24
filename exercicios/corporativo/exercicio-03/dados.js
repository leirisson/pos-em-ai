export default {
  labels_ordem: ["alto", "medio", "baixo"],
  features_ordem: ["renda_norm", "emprego_clt", "emprego_autonomo", "emprego_desempregado", "hist_bom", "hist_regular", "hist_ruim"],
  bruto: {
    treino: [
      { renda: 1200, emprego: "clt", historico: "bom", label: "baixo" },
      { renda: 800, emprego: "autonomo", historico: "regular", label: "medio" },
      { renda: 500, emprego: "desempregado", historico: "ruim", label: "alto" },
      { renda: 1500, emprego: "clt", historico: "bom", label: "baixo" },
      { renda: 700, emprego: "autonomo", historico: "ruim", label: "alto" },
      { renda: 1100, emprego: "clt", historico: "regular", label: "medio" },
      { renda: 950, emprego: "autonomo", historico: "bom", label: "medio" },
      { renda: 400, emprego: "desempregado", historico: "ruim", label: "alto" }
    ],
    teste: [
      { renda: 1300, emprego: "clt", historico: "bom", label: "baixo" },
      { renda: 600, emprego: "autonomo", historico: "regular", label: "medio" },
      { renda: 450, emprego: "desempregado", historico: "ruim", label: "alto" },
      { renda: 1000, emprego: "clt", historico: "regular", label: "medio" }
    ]
  }
}
