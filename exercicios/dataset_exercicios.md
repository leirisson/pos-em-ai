 # Dataset dos Exercícios
 
 Tabela de referência dos alunos com idade normalizada.
 
 | Nome    | Idade | Cor       | Cidade | Categoria | idade_norm |
 |---------|-------|-----------|--------|-----------|------------|
 | Lucas   | 36    | Azul      | SP     | premium   | 0.4286     |
 | Mariana | 22    | Verde     | RJ     | medium    | 0.0952     |
 | Pedro   | 50    | Vermelho  | BH     | basic     | 0.7619     |
 | Juliana | 30    | Azul      | RJ     | premium   | 0.2857     |
 | Roberto | 45    | Verde     | BH     | basic     | 0.6429     |
 | Camila  | 25    | Vermelho  | SP     | medium    | 0.1667     |
 | Felipe  | 38    | Azul      | BH     | premium   | 0.4762     |
 | Beatriz | 18    | Verde     | SP     | medium    | 0.0000     |
 | Thiago  | 60    | Vermelho  | RJ     | basic     | 1.0000     |
 
 Fórmula de normalização da idade:
 
 ```
 idade_norm = (idade - 18) / (60 - 18)
 ```
