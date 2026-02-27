Exercício 02 — Qualificação de Leads (bruto + normalizado)

- Objetivo: classificar leads como quente, morno ou frio, a partir de engajamento, origem e país.
- Entrada: engajamento (0–100), origem ∈ {organico, pago, referral}, país ∈ {brasil, mexico, chile}.
- Saída: classe ∈ {quente, morno, frio}, na ordem [quente, morno, frio].

Tarefas
- Ler dados em dados.js (blocos bruto e normalizado).
- Aplicar one-hot em origem e país; normalizar engajamento via min–max com dados de treino.
- Definir modelo de classificação, treinar e avaliar.
- Comparar performance com o Exercício 01 e discutir variações.

Conceitos
- Padronização do pipeline entre conjuntos distintos.
- Cálculo de estatísticas com treino para evitar vazamento.
- Interpretação de métricas em classificação multiclasse.

Critérios de Conclusão
- Pipeline reproduzido, modelo treinado e métricas de teste reportadas.

Entregáveis
- exercicio.js com sua solução.
- dados.js utilizado.
- Este README com passos e conceitos.
Tabela de referência (dados brutos + normalizado)

| Engajamento | Origem    | País    | Classe | engajamento_norm |
|-------------|-----------|---------|--------|------------------|
| 30          | organico  | brasil  | frio   | 0.143            |
| 55          | pago      | mexico  | morno  | 0.500            |
| 80          | referral  | chile   | quente | 0.857            |
| 90          | organico  | brasil  | quente | 1.000            |
| 20          | pago      | chile   | frio   | 0.000            |
| 60          | referral  | brasil  | morno  | 0.571            |

Fórmula de normalização (min–max com estatísticas do treino):

```
engajamento_norm = (engajamento - 20) / (90 - 20)
```
