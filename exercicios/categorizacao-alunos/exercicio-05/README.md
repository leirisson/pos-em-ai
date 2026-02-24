Exercício 05 — Exportação e Inferência (bruto + novas amostras)

- Objetivo: treinar, salvar o modelo e realizar inferência em novas amostras.
- Entrada: idade (anos), cor ∈ {vermelho, verde, azul}, localização ∈ {norte, sul, centro}.
- Saída: categoria ∈ {premium, medium, basic}, na ordem [premium, medium, basic].

Tarefas
- Ler dados brutos em dados.json e preparar (one-hot + min–max com estatísticas do treino).
- Treinar o modelo e avaliar no conjunto de teste.
- Exportar/persistir o modelo treinado.
- Recarregar o modelo salvo e gerar previsões para novas amostras em dados.json.
- Interpretar probabilidades softmax e discutir casos de maior incerteza.

Conceitos
- Persistência de modelos e reuso em produção.
- Inferência em dados fora do treino e calibração de confiança.
- Interpretação básica de probabilidades em classificação multiclasse.

Critérios de Conclusão
- Modelo treinado, salvo e recarregado com sucesso.
- Previsões geradas para novas amostras com interpretação registrada.
- Métricas de teste reportadas.

Entregáveis
- exercicio.js preenchido com sua solução.
- dados.json com treino, teste e novas amostras.
- Este README com passos e conceitos.
