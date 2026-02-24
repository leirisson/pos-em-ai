Exercício 01 — Exemplo Guiado (dados normalizados e não normalizados)

- Objetivo: treinar um modelo que classifica alunos em premium, medium ou basic a partir de idade, cor favorita e localização.
- Entrada: idade (anos), cor ∈ {vermelho, verde, azul}, localização ∈ {norte, sul, centro}.
- Saída: categoria ∈ {premium, medium, basic}, na ordem [premium, medium, basic].

Tarefas
- Ler dados brutos e normalizados em dados.json.
- Aplicar one-hot em cor e localização nos dados brutos.
- Normalizar a idade via min–max usando apenas o treino (confirmar min e max informados).
- Comparar seu resultado com o bloco “normalizado” do arquivo para validar a transformação.
- Definir arquitetura simples com uma camada densa oculta e saída softmax de 3 neurônios.
- Compilar com otimizador adam, perda categoricalCrossentropy e métrica accuracy.
- Treinar por épocas suficientes até estabilizar loss e accuracy (sem overfitting excessivo).
- Avaliar no conjunto de teste e registrar loss e accuracy.
- Registrar as decisões (épocas, batch) e observações de desempenho.

Conceitos
- One-hot encoding: transformar categorias em vetores binários.
- Normalização min–max: escalar idade para [0,1] com base em min e max do treino.
- Divisão treino/teste: evitar vazamento de informação na normalização e avaliação.
- Função de perda e métrica: categoricalCrossentropy e accuracy para classificação multiclasse.
- Overfitting vs. generalização: acompanhar métricas de treino e teste.

Critérios de Conclusão
- Pipeline completo de preparação dos dados brutos validado contra a versão normalizada.
- Modelo treinado até convergência razoável.
- Métricas de avaliação reportadas de forma objetiva.

Entregáveis
- exercicio.js preenchido com sua solução.
- dados.json utilizado no treino e teste.
- Este README documentando passos, conceitos e decisões.
