export default {
  labels_ordem: ["fraude", "legitimo", "suspeito"],
  features_ordem: ["valor_norm", "canal_web", "canal_mobile", "canal_loja", "horario_manha", "horario_tarde", "horario_noite"],
  bruto: {
    treino: [
      { valor: 20, canal: "web", horario: "manha", label: "legitimo" },
      { valor: 2500, canal: "mobile", horario: "noite", label: "fraude" },
      { valor: 50, canal: "loja", horario: "tarde", label: "legitimo" },
      { valor: 35, canal: "web", horario: "noite", label: "legitimo" },
      { valor: 5000, canal: "web", horario: "noite", label: "fraude" },
      { valor: 80, canal: "mobile", horario: "manha", label: "legitimo" },
      { valor: 60, canal: "web", horario: "tarde", label: "legitimo" },
      { valor: 120, canal: "loja", horario: "noite", label: "suspeito" },
      { valor: 45, canal: "mobile", horario: "tarde", label: "legitimo" },
      { valor: 70, canal: "loja", horario: "manha", label: "legitimo" }
    ],
    teste: [
      { valor: 3000, canal: "mobile", horario: "noite", label: "fraude" },
      { valor: 55, canal: "web", horario: "tarde", label: "legitimo" },
      { valor: 100, canal: "loja", horario: "noite", label: "suspeito" },
      { valor: 40, canal: "web", horario: "manha", label: "legitimo" }
    ]
  }
}
