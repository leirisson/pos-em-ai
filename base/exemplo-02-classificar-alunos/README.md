Exemplo 02 — Classificar Alunos com Dados Brutos

- Objetivo
- Partir de dados brutos (dados-brutos.js), aplicar one-hot e normalização min–max, treinar, avaliar e prever.

Dados
- Arquivo: dados-brutos.js
- Campos: idade (anos), cor ∈ {vermelho, verde, azul}, localizacao ∈ {norte, sul, centro}, label ∈ {premium, medium, basic}.

Pré-processamento
- One-hot: cria colunas binárias para cor e localizacao.
- Normalização min–max da idade usando apenas o conjunto de treino.
- Ordem final das features:
- [idade_norm, cor_vermelho, cor_verde, cor_azul, loc_norte, loc_sul, loc_centro].

Modelo
- Sequencial: densa(80, ReLU) → densa(3, softmax).
- Compilação: adam + categoricalCrossentropy, métrica accuracy.
- Treinamento: embaralha, roda por épocas e aprende os pesos.

Avaliação e Predição
- Avalia em teste e exibe loss e acc.
- Prediz probabilidades (premium, medium, basic) para uma amostra do teste.

Como executar
- Instale dependências: npm install
- Execute: npm run start

Observações
- Garantir que o cálculo de min e max usa apenas o treino evita vazamento de informação.
