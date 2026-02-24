Exercício 02 — Exemplo Guiado (segundo conjunto, dados normalizados e não normalizados)

- Objetivo: repetir o pipeline do Exercício 01 em um novo conjunto para comparar desempenho.
- Entrada: idade (anos), cor ∈ {vermelho, verde, azul}, localização ∈ {norte, sul, centro}.
- Saída: categoria ∈ {premium, medium, basic}, na ordem [premium, medium, basic].

Tarefas
- Ler dados brutos e normalizados em dados.json.
- Aplicar one-hot e normalizar a idade via min–max usando apenas o treino (validar min e max).
- Reutilizar a arquitetura e hiperparâmetros ou ajustá-los com justificativa.
- Treinar e avaliar; registrar métricas de teste.
- Comparar resultados com o Exercício 01 e discutir possíveis causas de variação.

Conceitos
- Reuso de pipeline: padronizar etapas para novos dados.
- Estatísticas do treino: impedir vazamento de informação.
- Variância de desempenho: influência da distribuição dos dados.

Critérios de Conclusão
- Pipeline reproduzido corretamente.
- Modelo treinado e avaliado com métricas reportadas.
- Análise comparativa registrada.

Entregáveis
- exercicio.js preenchido com sua solução.
- dados.json utilizado no treino e teste.
- Este README com passos, conceitos e comparação.
