Exercício 05 — Prioridade de SLA em Tickets (exportação e inferência)

- Objetivo: treinar, salvar e recarregar um modelo que classifica a prioridade do ticket em crítico, normal ou baixo.
- Entrada: tempo de espera (min), tipo de cliente ∈ {vip, standard, free}, categoria ∈ {pagamento, suporte, tecnico}.
- Saída: prioridade ∈ {critico, normal, baixo}, na ordem [critico, normal, baixo].

Tarefas
- Ler dados brutos em dados.js, preparar (one-hot + min–max com estatísticas do treino).
- Treinar e avaliar o modelo em teste; registrar métricas.
- Exportar o modelo treinado para disco.
- Recarregar o modelo salvo e gerar previsões para novas amostras.
- Interpretar as probabilidades e discutir casos incertos.

Conceitos
- Persistência de modelos e pipeline de inferência.
- Interpretação de saídas softmax em cenários operacionais.

Critérios de Conclusão
- Modelo treinado, salvo, recarregado e usado para prever novas amostras.
- Métricas de teste reportadas e análise das previsões.

Entregáveis
- exercicio.js com sua solução.
- dados.js com treino, teste e novas amostras.
- Este README com passos e conceitos.
