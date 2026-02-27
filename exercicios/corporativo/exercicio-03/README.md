Exercício 03 — Risco de Crédito (somente dados brutos)

- Objetivo: classificar risco de crédito em alto, médio ou baixo a partir de renda, emprego e histórico de pagamentos.
- Entrada: renda mensal (R$), emprego ∈ {clt, autonomo, desempregado}, histórico ∈ {bom, regular, ruim}.
- Saída: risco ∈ {alto, medio, baixo}, na ordem [alto, medio, baixo].

Tarefas
- Ler dados brutos em dados.js.
- Aplicar one-hot para emprego e histórico; calcular min e max da renda no treino e normalizar.
- Treinar um modelo multiclasse, avaliar e registrar métricas.
- Discutir como o limite de renda e histórico impactam o risco previsto.

Conceitos
- Separação treino/teste e normalização com estatísticas do treino.
- Trade-offs de fronteiras de decisão e variáveis dominantes.

Critérios de Conclusão
- Pipeline de preparação completo, modelo treinado, métricas registradas.

Entregáveis
- exercicio.js com sua solução.
- dados.js com os dados brutos.
- Este README com passos e conceitos.
Tabela de referência (dados brutos + renda normalizada)

| Renda (R$) | Emprego      | Histórico | Risco  | renda_norm |
|------------|--------------|-----------|--------|------------|
| 1200       | clt          | bom       | baixo  | 0.727      |
| 800        | autonomo     | regular   | medio  | 0.364      |
| 500        | desempregado | ruim      | alto   | 0.091      |
| 1500       | clt          | bom       | baixo  | 1.000      |
| 700        | autonomo     | ruim      | alto   | 0.273      |
| 1100       | clt          | regular   | medio  | 0.636      |

Fórmula de normalização (min–max com estatísticas do treino):

```
renda_norm = (renda - 400) / (1500 - 400)
```
