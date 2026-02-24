Exercício 04 — Classes Desbalanceadas (somente dados brutos)

- Objetivo: treinar um modelo com conjunto desbalanceado, majoritariamente “basic”, explorando estratégias de mitigação.
- Entrada: idade (anos), cor ∈ {vermelho, verde, azul}, localização ∈ {norte, sul, centro}.
- Saída: categoria ∈ {premium, medium, basic}, na ordem [premium, medium, basic].

Tarefas
- Ler dados brutos em dados.json e preparar (one-hot + min–max com estatísticas do treino).
- Treinar um modelo base e avaliar métricas macro e por classe.
- Aplicar pelo menos uma estratégia de mitigação (ex.: pesos de classe) e comparar.
- Discutir impacto nas métricas e trade-offs observados.

Conceitos
- Desbalanceamento de classes: efeitos na decisão do modelo e nas métricas.
- Pesos de classe, reamostragem e estratificação.
- Métricas por classe e média macro.

Critérios de Conclusão
- Pipeline de preparação correto.
- Experimentos com e sem mitigação, com comparação clara de métricas.

Entregáveis
- exercicio.js preenchido com sua solução.
- dados.json com os dados brutos.
- Este README com passos, conceitos e análise.
