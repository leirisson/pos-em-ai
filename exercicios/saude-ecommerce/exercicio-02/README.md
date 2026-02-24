Exercício 02 — Propensão de Compra no E-commerce (bruto + normalizado)

- Objetivo: classificar usuários em converteu, explorou ou saiu com base em visitas nos últimos 30 dias, origem do tráfego e dispositivo.
- Entrada: visitas30 (0–90), origem ∈ {organico, pago, email}, dispositivo ∈ {desktop, mobile, tablet}.
- Saída: classe ∈ {converteu, explorou, saiu}, na ordem [converteu, explorou, saiu].

Tarefas
- Ler dados em dados.js (blocos bruto e normalizado).
- Aplicar one-hot para origem e dispositivo nos dados brutos.
- Normalizar visitas30 via min–max usando apenas o conjunto de treino (validar min e max).
- Comparar com o bloco normalizado para verificar a transformação.
- Treinar, avaliar em teste e registrar loss/accuracy.

Conceitos
- One-hot encoding de variáveis categóricas.
- Normalização min–max com estatísticas do treino para evitar vazamento.
- Classificação multiclasse com softmax e entropia cruzada categórica.

Critérios de Conclusão
- Pipeline de preparo validado, modelo treinado e métricas de teste registradas.

Entregáveis
- exercicio.js com sua solução.
- dados.js com dados brutos e normalizados.
- Este README com passos e conceitos.
