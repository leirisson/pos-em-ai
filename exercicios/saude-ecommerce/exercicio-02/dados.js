export default {
  labels_ordem: ["converteu", "explorou", "saiu"],
  features_ordem: ["visitas_norm", "origem_organico", "origem_pago", "origem_email", "disp_desktop", "disp_mobile", "disp_tablet"],
  bruto: {
    treino: [
      { visitas30: 10, origem: "organico", dispositivo: "desktop", label: "saiu" },
      { visitas30: 25, origem: "pago", dispositivo: "mobile", label: "explorou" },
      { visitas30: 60, origem: "email", dispositivo: "desktop", label: "converteu" },
      { visitas30: 80, origem: "organico", dispositivo: "mobile", label: "converteu" },
      { visitas30: 20, origem: "email", dispositivo: "tablet", label: "saiu" },
      { visitas30: 45, origem: "pago", dispositivo: "desktop", label: "explorou" }
    ],
    teste: [
      { visitas30: 35, origem: "organico", dispositivo: "tablet", label: "explorou" },
      { visitas30: 70, origem: "pago", dispositivo: "mobile", label: "converteu" },
      { visitas30: 15, origem: "email", dispositivo: "mobile", label: "saiu" }
    ]
  },
  normalizado: {
    metadados: { min_visitas: 10, max_visitas: 80, criterio: "minmax_treino" },
    xs_treino: [
      [0.000, 1, 0, 0, 1, 0, 0],
      [0.214, 0, 1, 0, 0, 1, 0],
      [0.714, 0, 0, 1, 1, 0, 0],
      [1.000, 1, 0, 0, 0, 1, 0],
      [0.143, 0, 0, 1, 0, 0, 1],
      [0.500, 0, 1, 0, 1, 0, 0]
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
      [0.357, 1, 0, 0, 0, 0, 1],
      [0.857, 0, 1, 0, 0, 1, 0],
      [0.071, 0, 0, 1, 0, 1, 0]
    ],
    ys_teste: [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ]
  }
}
