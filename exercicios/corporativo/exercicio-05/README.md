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
Tabela de referência (dados brutos + tempo normalizado)

| Tempo (min) | Tipo     | Categoria | Prioridade | tempo_norm |
|-------------|----------|-----------|------------|------------|
| 120         | vip      | suporte   | critico    | 1.000      |
| 30          | standard | pagamento | normal     | 0.182      |
| 10          | free     | tecnico   | baixo      | 0.000      |
| 90          | vip      | pagamento | critico    | 0.727      |
| 25          | standard | tecnico   | normal     | 0.136      |
| 110         | vip      | tecnico   | critico    | 0.909      |

Fórmula de normalização (min–max com estatísticas do treino):

```
tempo_norm = (tempo - 10) / (120 - 10)
```
