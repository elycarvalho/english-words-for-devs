const list = document.querySelector('#list')
const btnSearch = document.querySelector('#btn-search')

const words = [
    {word:'add',translation: "adicionar, acrescentar"},
    {word:"alter",translation: "alterar, mudar"},
    {word:"any",translation: "qualquer"},
    {word:"append",translation: "acrescentar, anexar"},
    {word:"apply",translation: "aplicar, solicitar, requerer"},
    {
      word:"array",translation: "variedade, sequência de coisas, ordem, arranjo. Ex: 'a bewildering array of choices' - uma variedade desconcertante de escolhas"
    },
    {word:"arrow",translation: "seta, flecha"},
    {word:"aside",translation: "a parte, de lado, ao lado"},
    {word:"await",translation: "aguardar, esperar"},
    {word:"backslash",translation: "barra invertida ( \ )"},
    {word:"between",translation: "entre"},
    {word:"body",translation: "corpo"},
    {word:"border",translation: "borda, fronteira, beira"},
    {word:"brackets",translation: "colchetes"},
    {word:"break",translation: "quebrar, romper, pausa"},
    {word:"bug",translation: "bicho pequeno, inseto, besouro, falha em código de programação"},
    {word:"call",translation: "chamar, chamada"},
    {word:"callable",translation: "exigível, que pode ser chamado. Um objeto que pode ser chamado como uma função"},
    {word:"callback",translation: "chamar de volta. Uma função passada como argumento para outra função"},
    {word:"case",translation: "caso, causa, estojo, cápsula"},
    {word:"catch",translation: "pegar, capturar, apanhar, agarrar"}, 
    {word:"clear",translation: "claro, limpo, limpar, clarear"},
    {word:"count",translation: "contar, contagem"},
    {word:"create",translation: "criar"},
    {word:"curly braces",translation: "chaves ( ) "},
    {word:"curly brackets",translation: "colchetes"},
    {word:"debbug",translation: "depurar, verificar erros no código"},
    {word:"debbuger",translation: "programa de computador que auxilia na depuração e detecção de erros em códigos"},
    {word:"decrement",translation: "diminuir, decrescer"},
    {word:"default",translation: "padrão"},
    {word:"display",translation: "mostrar, exibir, mostrador"},
    {word:"drop",translation: "derrubar, soltar, largar, cair, gota, gotejar"},
    {word:"each",translation: "cada"},
    {word:"else",translation: "senão, outro, ainda mais, ou, além disso, em vez de"},
    {word:"embed",translation: "embutir"},
    {word:"entry",translation: "entrada, registro"},
    {word:"evaluate",translation: "avaliar"},
    {word:"even",translation: "mesmo, ainda, até, par"},
    {word:"evenly",translation: "uniformente"},
    {word:"fetch",translation: "buscar, trazer"},
    {word:"find",translation: "encontrar, achar, buscar"},
    {word:"flat",translation: "achatar, achatado, liso, plano"},
    {word:"float",translation: "flutuar, boiar, pairar"},
    {word:"floor",translation: "piso, chão, fundo, solo, andar de prédio"},
    {word:"for",translation: "para, por, durante, enquanto"},
    {word:"footer",translation: "rodapé"},
    {word:"full",translation: "cheio, completo"},
    {word:"garbage",translation: "lixo, resto, refugo, sobras, escombros"},
    {word:"get",translation: "obter, adquirir, arranjar"},
    {word:"greater than",translation: "maior que ( > )"},
    {word:"head",translation: "cabeça, parte superior"},
    {word:"header",translation: "cabeçalho"},
    {word:"height",translation: "altura"},
    {word:"hoisting",translation: "elevação, içar, levantar"},
    {word:"include",translation: "incluir"},
    {word:"increment",translation: "incremento, aumento, incrementar"},
    {word:"inherit",translation: "herdar, receber como herança"},
    {word:"inner",translation: "interior, parte interna"},
    {word:"insert",translation: "inserir"},
    {word:"integer",translation: "inteiro"},
    {word:"join",translation: "juntar, unir, ligar"},
    {word:"key",translation: "chave, tecla, botão"},
    {word:"keyword",translation: "palavra chave"},
    {word:"length",translation: "comprimento, extensão, duração"},
    {word:"listen",translation: "escutar"},
    {word:"load",translation: "carregamento, carga, carregar"},
    {word:"main",translation: "principal"},
    {word:"markup",translation: "marcação"},
    {word:"match",translation: "combinar, corresponder, igualar, partida"},
    {word:"odd",translation: "impar, chance"},
    {word:"outer",translation: "exterior, parte de fora"}, 
    {word:"override",translation: "sobrepor, sobrescrever, passar por cima de"},
    {word:"package",translation: "pacote"},
    {word:"parse",translation: "analisar"},
    {word:"path",translation: "caminho, trajeto"},
    {word:"procedure",translation: "procedimento"},
    {word:"push",translation: "empurrar"},
    {word:"query",translation: "consultar, indagar"},
    {word:"queue",translation: "fila, enfileirado"},
    {word:"quote",translation: "aspas, citar"},
    {word:"radius",translation: "raio"},
    {word:"random",translation: "randômico, aleatório"},
    {word:"read",translation: "ler, interpretar, decifrar"},
    {word:"replace",translation: "substituir"},
    {word:"require",translation: "requerer, requisitar, pedir"},
    {word:"row",translation: "linha, fila"},
    {word:"run",translation: "correr, executar um código de programação"},
    {word:"servlet",translation: "um pequeno programa residente no servidor que normalmente é executado automaticamente em resposta à entrada do usuário."},
    {word:"set",translation: "definir"},
    {word:"shift",translation: "mudar, trocar"},
    {word:"sign",translation: "sinal, sinalizar"},
    {word:"size",translation: "tamanho, dimensão, definir tamanho"},
    {word:"slash",translation: "barra ( / )"},
    {word:"slice",translation: "fatiar"},
    {word:"sort",translation: "organizar, ordenar, tipo, espécie"},
    {word:"source",translation: "fonte, origem"},
    {word:"span",translation: "vão"},
    {word:"splice",translation: "unir, emendar, juntar, ligar"},
    {word:"split",translation: "dividir, rachar, partir"},
    {word:"storage",translation: "armazenamento"},
    {word:"string",translation: "fio, cordão, barbante"},
    {word:"sum",translation: "soma, somar"},
    {word:"switch",translation: "trocar, mudar, interruptor, disjuntor, chave"},
    {word:"then",translation: "então, depois, em seguida"},
    {word:"throw",translation: "lançar, jogar, atirar, arremessar, soltar"},
    {word:"title",translation: "título"},
    {word:"trait",translation: "característica"},
    {word:"trim",translation: "aparar, recortar"},
    {word:"try",translation: "tentar, provar, experimentar"},
    {word:"unset",translation: "desarmar, desmontar, desativar"},
    {word:"up",translation: "para cima, acima, subir, levantar"},
    {word:"value",translation: "valor"},
    {word:"view",translation: "visão, visualizar"},
    {word:"void",translation: "vazio, oco, desocupado"},
    {word:"volatile",translation: "volátil, que se desfaz com facilidade"},
    {word:"weight",translation: "peso"},
    {word:"while",translation: "enquanto"},
    {word:"width",translation: "largura"},
    {word:"write",translation: "escrever"},
    {word:"yield",translation: "colheita, rendimento, produto"}
]
console.log(words.length)

let typedWord = document.querySelector('#typed-word')
   
function showList(){
    for(let i = 0; i < words.length; i++){
        list.innerHTML += `
            <li><h5>${words[i].word}:</h5> ${words[i].translation}</li>
            <hr>
            `
    }
}
showList()

//ao clicar no botão pesquisar procura por uma palavra no array e mostra abaixo dos botões
btnSearch.addEventListener('click', searchWord())

typedWord.addEventListener('keyup', ()=>{
    searchWord()
})

function searchWord(){
    const foundWord = document.querySelector('#found-word')
    foundWord.innerHTML = ''
    for(let i = 0; i < words.length; i++){
        let wordSlice = words[i].word.slice(0, typedWord.value.length)
        if(typedWord.value === wordSlice){
            foundWord.innerHTML += `
                <h5 class='ml-1'>${words[i].word} :</h5> <p class='ml-1'>${words[i].translation}</p>
                <hr>
            `
        }
    }     
}
