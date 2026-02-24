Exemplo 02 — Segmentação de Clientes com Dados Brutos

- Objetivo
- Classificar clientes em enterprise, smb ou individual usando faturamento, setor e região.

Dados
- Arquivo: dados-brutos.js
- Campos: faturamento (R$), setor ∈ {tecnologia, varejo, servicos}, regiao ∈ {norte, sul, centro}, label ∈ {enterprise, smb, individual}.

Pré-processamento
- One-hot: transforma setor e regiao em colunas binárias.
- Normalização min–max do faturamento usando apenas o conjunto de treino.
- Ordem final das features:
- [faturamento_norm, setor_tecnologia, setor_varejo, setor_servicos, reg_norte, reg_sul, reg_centro].

Modelo
- Sequencial: densa(80, ReLU) → densa(3, softmax).
- Compilação: adam + categoricalCrossentropy, métrica accuracy.
- Treinamento: atualiza pesos com dados normalizados e codificados.

Avaliação e Predição
- Avalia em teste e exibe loss e acc.
- Prediz probabilidades (enterprise, smb, individual) para uma amostra do teste.

Como executar
- Instale dependências: npm install
- Execute: npm run start

Observações
- Calcular min e max no treino previne vazamento e melhora a generalização.
