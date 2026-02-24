export default {
  labels_ordem: ["alta", "media", "baixa"],
  features_ordem: ["minutos_norm", "canal_chat", "canal_email", "canal_telefone", "cli_vip", "cli_regular", "cli_novo"],
  bruto: {
    treino: [
      { minutosAbertura: 120, canal: "chat", cliente: "vip", label: "alta" },
      { minutosAbertura: 30, canal: "email", cliente: "regular", label: "media" },
      { minutosAbertura: 10, canal: "telefone", cliente: "novo", label: "baixa" },
      { minutosAbertura: 90, canal: "chat", cliente: "vip", label: "alta" },
      { minutosAbertura: 25, canal: "email", cliente: "novo", label: "media" },
      { minutosAbertura: 15, canal: "telefone", cliente: "regular", label: "baixa" },
      { minutosAbertura: 45, canal: "email", cliente: "vip", label: "media" },
      { minutosAbertura: 110, canal: "telefone", cliente: "vip", label: "alta" }
    ],
    teste: [
      { minutosAbertura: 12, canal: "telefone", cliente: "novo", label: "baixa" },
      { minutosAbertura: 60, canal: "email", cliente: "regular", label: "media" },
      { minutosAbertura: 100, canal: "chat", cliente: "vip", label: "alta" },
      { minutosAbertura: 20, canal: "telefone", cliente: "regular", label: "baixa" }
    ]
  }
}
