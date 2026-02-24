Exemplo 00 — Introdução a Tensores e Dados de Entrada

- Objetivo
- Mostrar como representar dados numéricos para uma rede neural com TensorFlow.js e criar tensores 2D para entradas (xs) e saídas (ys).

O que o código faz
- Importa @tensorflow/tfjs-node.
- Define vetores normalizados representando: [idade_normalizada, azul, vermelho, verde, São Paulo, Rio, Curitiba].
- Cria tensores de entrada (xs) e saída (ys) a partir dos arrays.
- Imprime xs e ys para visualizar a estrutura dos dados.

Conceitos
- Tensores 2D: matrizes onde cada linha é uma amostra e cada coluna é uma feature.
- One-hot encoding: transformar categorias (cor, cidade) em colunas binárias.
- Normalização: escalar idade para um intervalo [0,1] para estabilizar o treinamento.

Como executar
- Instale dependências: npm install
- Rode o exemplo: npm run start

Próximos passos
- Evoluir para um modelo treinável (veja exemplo-01-classificar-alunos-ACADEMIA) adicionando camadas densas, função de perda e otimizador.
