Exercício 01 — Triagem Hospitalar (bruto + normalizado)

- Objetivo: classificar prioridade de atendimento em alta, média ou baixa com base em um score de sintomas, tipo de queixa e setor de atendimento.
- Entrada: scoreSintomas (0–100), queixa ∈ {respiratoria, gastrointestinal, trauma}, setor ∈ {emergencia, clinica, observacao}.
- Saída: prioridade ∈ {alta, media, baixa}, na ordem [alta, media, baixa].

Tarefas
- Ler dados em dados.js (blocos bruto e normalizado).
- Aplicar one-hot para queixa e setor nos dados brutos.
- Normalizar o score via min–max usando apenas o conjunto de treino (validar min e max).
- Comparar com o bloco normalizado para checar a transformação.
- Treinar, avaliar e registrar loss/accuracy no teste.

Conceitos
- One-hot encoding de categorias clínicas.
- Normalização min–max com estatísticas do treino.
- Classificação multiclasse com softmax e entropia cruzada categórica.

Critérios de Conclusão
- Pipeline de preparo validado e modelo treinado com métricas reportadas.

Entregáveis
- exercicio.js com sua solução.
- dados.js com dados brutos e normalizados.
- Este README com passos, conceitos e decisões.
