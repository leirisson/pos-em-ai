Exercício 03 — Prioridade de Suporte no E-commerce (somente dados brutos)

- Objetivo: classificar a prioridade de atendimento do suporte em alta, média ou baixa com base no tempo desde a abertura do ticket, canal e tipo de cliente.
- Entrada: minutosAbertura (min), canal ∈ {chat, email, telefone}, cliente ∈ {vip, regular, novo}.
- Saída: prioridade ∈ {alta, media, baixa}, na ordem [alta, media, baixa].

Tarefas
- Ler dados brutos em dados.js.
- Aplicar one-hot para canal e cliente.
- Normalizar minutosAbertura via min–max calculado com base apenas no treino.
- Treinar e avaliar o modelo; registrar loss e accuracy no teste.
- Discutir como o tipo de cliente e o tempo desde a abertura influenciam a prioridade.

Conceitos
- Separação de conjuntos e normalização com estatísticas do treino.
- Classificação multiclasse com softmax e entropia cruzada categórica.

Critérios de Conclusão
- Pipeline de preparação completo, modelo treinado e métricas reportadas.

Entregáveis
- exercicio.js com sua solução.
- dados.js com os dados brutos.
- Este README com passos e conceitos.
