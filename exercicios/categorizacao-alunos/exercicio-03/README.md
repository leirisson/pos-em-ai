Exercício 03 — Pipeline Completo com Dados Brutos

- Objetivo: implementar todo o pipeline a partir de dados não normalizados, sem referência pronta de normalização.
- Entrada: idade (anos), cor ∈ {vermelho, verde, azul}, localização ∈ {norte, sul, centro}.
- Saída: categoria ∈ {premium, medium, basic}, na ordem [premium, medium, basic].

Tarefas
- Ler dados brutos em dados.json.
- Aplicar one-hot em cor e localização.
- Calcular min e max da idade no treino e normalizar a idade para [0,1].
- Salvar e reutilizar min e max para transformar o conjunto de teste.
- Definir arquitetura, compilar, treinar e avaliar.
- Registrar parâmetros de treino e justificar escolhas.

Conceitos
- Separação de etapas: preparação, modelagem, treino, avaliação.
- Normalização apenas com estatísticas do treino.
- Reprodutibilidade: anotar hiperparâmetros e semente aleatória se aplicável.

Critérios de Conclusão
- Pipeline de preparação documentado.
- Modelo treinado e avaliado com métricas reportadas.
- Decisões e resultados registrados.

Entregáveis
- exercicio.js preenchido com sua solução.
- dados.json utilizado no pipeline.
- Este README descrevendo etapas e conceitos.
