Exercício 01 — Segmentação de Clientes (bruto + normalizado)

- Objetivo: classificar clientes em enterprise, smb ou individual com base em faturamento anual, setor e região.
- Entrada: faturamento (R$), setor ∈ {tecnologia, varejo, serviços}, região ∈ {norte, sul, centro}.
- Saída: segmento ∈ {enterprise, smb, individual}, na ordem [enterprise, smb, individual].

Tarefas
- Ler dados em dados.js (blocos bruto e normalizado).
- Aplicar one-hot no setor e região nos dados brutos.
- Normalizar faturamento com min–max usando apenas os dados de treino (verificar min e max informados).
- Comparar seu resultado com o bloco normalizado para validar a transformação.
- Definir um modelo simples de classificação multiclasse, compilar, treinar e avaliar.
- Reportar loss e accuracy de teste, além de observações sobre overfitting.

Conceitos
- One-hot encoding para variáveis categóricas.
- Normalização min–max com estatísticas do treino.
- Classificação multiclasse com softmax e categorical crossentropy.

Critérios de Conclusão
- Pipeline de preparação validado e modelo treinado até convergência razoável.
- Métricas de teste registradas.

Entregáveis
- exercicio.js com sua solução.
- dados.js utilizado no treino e teste.
- Este README com passos, conceitos e decisões.
Tabela de referência (dados brutos + normalizado)

| Faturamento (R$) | Setor       | Região | Segmento    | faturamento_norm |
|------------------|-------------|--------|-------------|------------------|
| 120              | tecnologia  | norte  | smb         | 0.000            |
| 900              | varejo      | sul    | enterprise  | 0.886            |
| 300              | servicos    | centro | individual  | 0.205            |
| 400              | varejo      | centro | smb         | 0.318            |
| 980              | tecnologia  | sul    | enterprise  | 0.977            |
| 200              | servicos    | norte  | individual  | 0.091            |

Fórmula de normalização (min–max com estatísticas do treino):

```
faturamento_norm = (faturamento - 120) / (1000 - 120)
```
