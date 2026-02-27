Exercício 04 — Fraude em Transações (classes desbalanceadas, somente brutos)

- Objetivo: classificar transações em fraude, legítimo ou suspeito; o conjunto é desbalanceado.
- Entrada: valor da transação (R$), canal ∈ {web, mobile, loja}, horário ∈ {manha, tarde, noite}.
- Saída: classe ∈ {fraude, legitimo, suspeito}, na ordem [fraude, legitimo, suspeito].

Tarefas
- Ler dados brutos em dados.js e preparar (one-hot + normalização min–max com estatísticas do treino).
- Treinar um modelo base, avaliar métricas macro e por classe.
- Aplicar uma estratégia de mitigação (ex.: pesos de classe) e comparar resultados.
- Discutir trade-offs e mudanças nas métricas por classe.

Conceitos
- Desbalanceamento de classes, pesos de classe e impacto nas métricas.
- Importância de avaliar por classe além da acurácia global.

Critérios de Conclusão
- Pipeline correto, experimento com/sem mitigação e comparação clara de métricas.

Entregáveis
- exercicio.js com sua solução.
- dados.js com os dados brutos.
- Este README com passos, conceitos e análise.
Tabela de referência (dados brutos + valor normalizado)

| Valor (R$) | Canal  | Horário | Classe    | valor_norm |
|------------|--------|---------|-----------|------------|
| 20         | web    | manha   | legitimo  | 0.000      |
| 2500       | mobile | noite   | fraude    | 0.498      |
| 50         | loja   | tarde   | legitimo  | 0.006      |
| 5000       | web    | noite   | fraude    | 1.000      |
| 80         | mobile | manha   | legitimo  | 0.012      |
| 120        | loja   | noite   | suspeito  | 0.020      |

Fórmula de normalização (min–max com estatísticas do treino):

```
valor_norm = (valor - 20) / (5000 - 20)
```
