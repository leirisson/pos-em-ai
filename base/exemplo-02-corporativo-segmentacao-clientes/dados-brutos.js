// Dados brutos (sem normalização e sem one-hot) para o exemplo corporativo
// Segmentos: enterprise, smb, individual
export default {
  treino: [
    // faturamento (R$), setor, regiao, label
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
}
