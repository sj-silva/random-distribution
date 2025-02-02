# Distribuição de Números Aleatórios

Este é um projeto simples que utiliza a biblioteca p5.js para visualizar a distribuição de números aleatórios em diferentes "bins" (caixas). O projeto gera números aleatórios e os distribui em 10 caixas, mostrando graficamente quantos números caem em cada uma delas.

## Como Funciona

O projeto cria uma tela de 400x400 pixels onde são desenhadas 10 caixas (bins). A cada frame, um número aleatório é gerado e atribuído a uma das caixas. A altura de cada caixa aumenta conforme mais números são atribuídos a ela. O processo continua até que uma das caixas atinja uma altura próxima ao topo da tela.

### Código Principal

O código principal está no arquivo `main.js`. Aqui estão os principais componentes:

- **WINDOW_WIDTH** e **WINDOW_HEIGHT**: Definem o tamanho da janela.
- **WINDOW_COLOR**: Define a cor de fundo da janela.
- **totalBins**: Define o número de caixas (bins) que serão usadas.
- **countsPerBin**: Um array que armazena a contagem de números em cada bin.

### Funções Principais

- **setup()**: Configura o canvas e inicializa o array `countsPerBin` com zeros.
- **draw()**: Gera números aleatórios, atualiza a contagem em cada bin e desenha os retângulos que representam a altura de cada bin.

## Como Executar

Para executar este projeto, basta abrir o arquivo `index.html` em qualquer navegador moderno. O projeto utiliza a biblioteca p5.js, que é carregada diretamente de um CDN, portanto, não é necessário instalar nada adicionalmente.

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Conexão com a internet (para carregar a biblioteca p5.js)

## Exemplo de Uso

Este projeto serve como uma ferramenta visual interativa para explorar como a função `random()` do p5.js funciona, mostrando de maneira clara e intuitiva a distribuição uniforme de números aleatórios. O usuário poderá observar, em tempo real, como os números gerados entre 1 e 10 se distribuem de forma equilibrada entre os diferentes intervalos (bins), destacando o comportamento uniforme da função `random()` ao longo do tempo.
