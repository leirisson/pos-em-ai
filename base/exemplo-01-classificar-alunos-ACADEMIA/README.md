Exemplo 01 — Classificar Alunos (premium, medium, basic)

- Objetivo
- Treinar uma rede neural simples para classificar alunos em três categorias a partir de 7 features.

Dados e Features
- Os dados já estão normalizados e one-hot encoded.
- Ordem das colunas: [idade_norm, azul, verde, vermelho, São Paulo, Rio, Manaus].
- Saídas (one-hot): [premium, medium, basic].

Pipeline
- Montagem dos tensores xs (entradas) e ys (saídas).
- Modelo sequencial com:
- Camada densa oculta (80 neurônios, ReLU).
- Camada densa de saída (3 neurônios, softmax).
- Compilação: optimizer adam, loss categoricalCrossentropy, metrics accuracy.
- Treinamento: ajuste dos pesos ao longo de várias épocas.
- Predição: geração de probabilidades para uma nova amostra.

Como executar
- Instale dependências: npm install
- Rode o exemplo: npm run start

Conceitos
- Softmax: transforma logits em probabilidades que somam 1.
- Entropia cruzada categórica: mede o erro entre distribuição prevista e real.
- Normalização: mantém recursos em escala comparável, ajuda o otimizador.
