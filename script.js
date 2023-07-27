const words = [
    {word:"add",translation:"adicionar, acrescentar, incluir"},
    {word:"address",translation:"endereço"},
    {word:"allocate",translation:"alocar, distribuir, repartir, localizar"},
    {word:"alter",translation:"alterar, mudar"},
    {word:"AJAX",translation:"(Asynchronous JavaScript and XML) Javascript e XML asíncrono. É um método para criar páginas da web mais rápidas e dinâmicas."},
    {word:"any",translation:"qualquer"},
    {
      word:"a.p.i",
      translation:"É a abreviação de 'application programming interface'(Interface de programação de aplicativos). é um software intermediário que permite que dois aplicativos conversem entre si."},
    {word:"append",translation:"acrescentar, anexar, incluir"},
    {word:"apply",translation:"aplicar, solicitar, requerer"},
    {word:"around",translation:"ao redor de, em volta de"},
    {
      word:"array",
      translation: "variedade, sequência de coisas, ordem, arranjo. Ex: 'a bewildering array of choices' - uma variedade desconcertante de escolhas"
    },
    {word:"arrow",translation:"seta, flecha"},
    {word:"aside",translation:"a parte, de lado, ao lado"},
    {word:"await",translation:"aguardar, esperar"},
    {word:"backslash",translation:"barra invertida"},
    {word:"between",translation:"entre"},
    {word:"body",translation:"corpo"},
    {word:"boolean",translation:"em programação, boolean é uma variável que pode ter dois valores possíveis, chamados de 'true' e 'false' (verdadeiro e falso)"},
    {word:"border",translation:"borda, fronteira, beira"},
    {word:"brackets",translation:"colchetes"},
    {word:"branch",translation:"galho, ramificar. Usado em ferramentas de versionamento para se referir a divisão de versões."},
    {word:"break",translation:"quebrar, romper, pausa"},
    {word:"browser",translation:"navegador de internet. Um software que permite interagir com informações na web."},
    {word:"bug",translation:"bicho pequeno, inseto, besouro, falha em código de programação"},
    {word:"call",translation:"chamar, chamada"},
    {word:"callable",translation:"exigível, que pode ser chamado. Um objeto que pode ser chamado como uma função"},
    {word:"callback",translation:"chamar de volta. Uma função passada como argumento para outra função"},
    {word:"case",translation:"caso, causa, estojo, cápsula"},
    {word:"catch",translation:"pegar, capturar, apanhar, agarrar"},
    {word:"ceil",translation:"teto. Arredonda um numero para o inteiro maior."},
    {word:"clear",translation:"claro, limpo, limpar, clarear"},
    {word:"commit",translation:"cometer, enviar, comprometer-se. Usado em ferramentas de versionamento para guardar alterações feitas em uma versão."},
    {word:"compile",translation:"compilar. Converter um programa escrito em linguagem de alto nível para linguagem de máquina, de forma que ele possa ser executado."},
    {word:"compiler",translation:"compilador. Software que transforma o código fonte de um programa em linguagem de máquina."},
    {word:"concurrency",translation:"simultaneidade, capacidade de um programa de executar duas tarefas simultaneamente."},
    {word:"core",translation:"núcleo"},
    {word:"count",translation:"contar, contagem"},
    {word:"create",translation:"criar"},
    {word:"curly braces",translation: "chaves ( ) "},
    {word:"curly brackets",translation: "colchetes"},
    {word:"data", translation:"dados"},
    {word:"date",translation:"data"},
    {word:"debbug",translation:"depurar, verificar erros no código"},
    {word:"debbuger",translation:"programa de computador que auxilia na depuração e detecção de erros em códigos"},
    {word:"decrement",translation:"diminuir, decrescer"},
    {word:"default",translation:"padrão"},
    {word:"deploy",translation:"implantar"},
    {word:"deployment",translation:"implantação, desenvolvimento"},
    {word:"dev",translation:"abreviatura de 'developer' (desenvolvedor de software)"},
    {word:"developer",translation:"Desenvolvedor. Usado frequentemente para se referir a desenvolvedor de softwares"},
    {word:"developement",translation:"desenvolvimento. Usado frequentemente para se referir a desenvolvimento de softwares"},
    {word:"directory",translation:"diretório, pasta de arquivos"},
    {word:"display",translation:"mostrar, exibir, mostrador"},
    {word:"down",translation:"para baixo, descer, abaixar"},
    {word:"drop",translation:"derrubar, soltar, largar, cair, gota, gotejar"},
    {word:"each",translation:"cada"},
    {word:"else",translation:"senão, outro, ainda mais, ou, além disso, em vez de"},
    {word:"embed",translation:"embutir"},
    {word:"empty",translation:"vazio"},
    {word:"entry",translation:"entrada, registro"},
    {word:"evaluate",translation:"avaliar"},
    {word:"even",translation:"mesmo, ainda, até, par"},
    {word:"evenly",translation:"uniformente"},
    {word:"extend",translation:"estender, ampliar"},
    {word:"fetch",translation:"buscar, trazer"},
    {word:"field",translation:"campo"},
    {word:"fill",translation:"preencher, ocupar, completar, encher"},
    {word:"find",translation:"encontrar, achar, buscar"},
    {word:"flat",translation:"achatar, achatado, liso, plano"},
    {word:"float",translation:"flutuar, boiar, pairar, número de ponto flutuante"},
    {word:"floor",translation:"piso, chão, fundo, solo, andar de prédio"},
    {word:"for",translation:"para, por, durante, enquanto"},
    {word:"footer",translation:"rodapé"},
    {word:"framework", translation:"armação, estrutura de sustentação de construções, veículos ou objetos. Em desenvolvimento de software, é uma estrutura de códigos predefinidos, que podem ser usados em vários projetos diferentes, agilizando a produção de softwares."}, 
    {word:"full",translation:"cheio, completo"},
    {word:"garbage",translation:"lixo, resto, refugo, sobras, escombros"},
    {word:"get",translation:"obter, adquirir, arranjar"},
    {word:"goto",translation:"(go to) Vá para, ir para."},
    {word:"greater than",translation: "maior que ( > )"},
    {word:"grid",translation:"grade"},
    {word:"GUI",translation:"(Graphical user interface) interface gráfica do usuário."},
    {word:"has",translation:"tem, contém"},
    {word:"head",translation:"cabeça, parte superior"},
    {word:"header",translation:"cabeçalho"},
    {word:"height",translation:"altura"},
    {word:"hoisting",translation:"elevação, içar, levantar"},
    {word:"if",translation:"se"},
    {word:"include",translation: "incluir"},
    {word:"increment",translation: "incremento, aumento, incrementar"},
    {word:"inherit",translation: "herdar, receber como herança"},
    {word:"inheritance",translation:"herença. Em POO(programação orientada a objetos) é quando uma classe deriva de outra."},
    {word:"inner",translation: "interior, parte interna"},
    {word:"insert",translation: "inserir"},
    {word:"integer",translation: "inteiro"},
    {word:"into",translation:"para dentro de, em, dentro"},
    {word:"iterable",translation:"iterável. É um valor que pode ser passado em loop como foreach()."},
    {word:"iteration",translation:"repetição"},
    {word:"JDK",translation:"Java developement kit (kit de desenvolvimento da lingaugem java)"},
    {word:"JVM",translation:"Java virtual machine (máquina virtual java) Usada para executar códigos compilados na linguagem java."},
    {word:"join",translation: "juntar, unir, ligar"},
    {word:"JSON",translation:"(Javascript Object Notation) tipo de arquivo de texto usado para trocar dados entre sistemas."},
    {word:"key",translation: "chave, tecla, botão"},
    {word:"keyword",translation: "palavra chave"},
    {word:"leak",translation:"vazar, vazamento"},
    {word:"left",translation:"esquerda, deixado"},
    {word:"level",translation:"nível"},
    {word:"length",translation:"comprimento, extensão, duração"},
    {word:"library", translation:"biblioteca. Na programação é um coleção de códigos pré escrito que programadores podem usar para optimizar tarefas específicas."},
    {word:"listen",translation:"escutar"},
    {word:"load",translation:"carregamento, carga, carregar"},
    {word:"loop",translation:"processo onde o fim é conectado com o inicio é executado infinitamente até que haja algum comando para interromper o processo."},
    {word:"low",translation:"baixo, inferior"},
    {word:"lower",translation:"mais baixo, abaixo, diminuir"},
    {word:"main",translation:"principal, central"},
    {word:"manage",translation:"gerenciar"},
    {word:"management",translation:"gerenciamento"},
    {word:"markup",translation:"marcação"},
    {word:"match",translation:"combinar, corresponder, igualar, partida"},
    {word:"math",translation:"(Abreviação de Mathematics - matemática) Função usada em programação para lidar com números inteiros e de ponto flutuante."},
    {word:"merge",translation:"fundir, misturar"},
    {word:"new",translation:"novo"},
    {word:"next",translation:"próximo, posterior, seguinte"},
    {word:"null",translation:"nulo, sem efeito. Na programação pode indicar que um valor é zero ou que não tem nenhum valor."},
    {word:"number",translation:"número, enumerar"},
    {word:"odd",translation:"impar, chance, esquisito. Exemplos: What are the odds? (quais são as chances), 'odds or evens?'(impar ou par?)"},
    {word:"oop",translation:"É a abreviação de 'Object-oriented Programming'(Programação orientada a objeto). é um modelo de programação que organiza o design de software em torno de dados ou objetos, em vez de funções e lógica."},
    {word:"open source",translation:"código aberto. É um código fonte que fica disponível livremente para que qualquer um possa modificar e distribuir."},
    {word:"outer",translation:"exterior, parte de fora"}, 
    {word:"output",translation:"saida de dados, dados resultantes de um processo."},
    {word:"overflow",translation:"transbordo, transbordar"},
    {word:"overload",translation:"sobrecarga, carga excessiva, sobrecarregar"},
    {word:"override",translation:"sobrepor, sobrescrever, passar por cima de"},
    {word:"package",translation:"pacote"},
    {word:"parent", translation:"o pai ou a mãe"},
    {word:"parse",translation:"analisar"},
    {word:"password",translation:"senha"},
    {word:"path",translation:"caminho, trajeto"},
    {word:"power",translation:"força, energia, poder, potência (ex.: potência de um número"},
    {word:"print",translation:"imprimir ou mostrar na tela"},
    {word:"private",translation:"privado"},
    {word:"previous",translation:"anterior, prévio, precedente"},
    {word:"procedure",translation:"procedimento"},
    {
      word:"prototype",
      translation:"Protótipo, modelo. É um estilo de programação orientada a objetos no qual as classes não são explicitamente definidas, mas sim derivadas adicionando propriedades e métodos a uma instância de outra classe ou, com menos frequência, adicionando-os a um objeto vazio."
    },
    {word:"push",translation:"empurrar, enviar"},
    {word:"put",translation:"pôr, colocar"},
    {word:"query",translation:"consultar, indagar"},
    {word:"queue",translation:"fila, enfileirado"},
    {word:"quote",translation:"aspas, citar"},
    {word:"radius",translation:"raio"},
    {word:"rand",translation:"abreviação de random (randômico, aleatório"},
    {word:"random",translation:"randômico, aleatório"},
    {word:"read",translation:"ler, interpretar, decifrar"},
    {word:"regEx",translation:"(Abreviação de Regular Expression) Usado em programação para buscar e/ou substituir padrões em strings de texto."},
    {word:"replace",translation:"substituir"},
    {word:"require",translation:"requerer, requisitar, pedir"},
    {word:"required",translation:"exigido, requerido, necessário, obrigatório."},
    {word:"right",translation:"direito, lado direito, certo, correto"},
    {word:"round",translation:"redondo, arredondar"},
    {word:"row",translation: "linha, fila"},
    {word:"run",translation:"correr. Executar um código de programação"},
    {word:"screen",translation:"tela, monitor"},
    {word:"select",translation:"selecionar"},
    {word:"selector",translation:"seletor, selecionador, aquele que seleciona"},
    {word:"send",translation:"enviar, mandar"},
    {word:"server",translation:"servidor"},
    {word:"servlet",translation:"um pequeno programa residente no servidor que normalmente é executado automaticamente em resposta à entrada do usuário."},
    {word:"set",translation:"definir"},
    {word:"shift",translation:"mudar, trocar"},
    {word:"sign",translation:"sinal, sinalizar"},
    {word:"size",translation:"tamanho, dimensão, definir tamanho"},
    {word:"slash",translation:"barra ( / )"},
    {word:"slice",translation:"fatiar"},
    {word:"sort",translation:"organizar, ordenar, tipo, espécie"},
    {word:"source",translation:"fonte, origem"},
    {word:"source code",translation:"código fonte de um programa."},
    {word:"span",translation:"vão"},
    {word:"splice",translation:"unir, emendar, juntar, ligar"},
    {word:"split",translation:"dividir, rachar, partir"},
    {word:"SQL",translation:"(structured query language) linguagem de consulta estruturada. É uma linguagem padrão para manipulação de registros em bancos de dados relacionais."},
    {word:"stack",translation:"Pilha de objetos. Um conceito lógico que consiste em um conjunto de elementos semelhantes. O termo é frequentemente usado em programação e organização de memória em computadores."},
    {word:"status",translation:"estado, situação atual"},
    {word:"storage",translation:"armazenamento"},
    {word:"store",translation:"armazenar"},
    {word:"stream",translation:"fluxo, rio, transmissão. Dados que estão sendo transmitidos enquanto algum conteúdo está sendo consumido."},
    {word:"string",translation:"fio, cordão, barbante. Em programação string é uma sequência de caracteres alfanuméricos."},
    {word:"sum",translation:"soma, somar"},
    {word:"switch",translation:"trocar, mudar, interruptor, disjuntor, chave"},
    {word:"target", translation:"alvo"},
    {word:"task",translation:"tarefa"},
    {word:"then",translation:"então, depois, em seguida"},
    {word:"throw",translation:"lançar, jogar, atirar, arremessar, soltar"},
    {word:"title",translation:"título"},
    {word:"tool",translation:"ferramenta"},
    {word:"trait",translation:"característica"},
    {word:"trim",translation:"aparar, recortar"},
    {word:"true",translation:"verdadeiro"},
    {word:"try",translation:"tentar, provar, experimentar"},
    {word:"unset",translation:"desarmar, desmontar, desativar"},
    {word:"up",translation:"para cima, acima, subir, levantar"},
    {word:"update",translation:"atualizar"},
    {word:"value",translation:"valor"},
    {word:"view",translation:"visão, visualizar"},
    {word:"void",translation:"vazio, oco, desocupado"},
    {word:"volatile",translation:"volátil, que se desfaz com facilidade"},
    {word:"weight",translation:"peso"},
    {word:"where",translation:"onde"},
    {word:"while",translation:"enquanto"},
    {word:"width",translation:"largura"},
    {word:"workflow",translation:"fluxo de trabalho"},
    {word:"write",translation:"escrever"},
    {word:"yield",translation:"colheita, rendimento, produto"}
]

const list = document.querySelector('#list')
const btnSearch = document.querySelector('#btn-search')
const foundNumber = document.querySelector('#found-number')
console.log('palavras:' + words.length)

let typedWord = document.querySelector('#typed-word')
   
function showList(){
    for(let i = 0; i < words.length; i++){
        list.innerHTML += `
            
            <li>
                <h5>
                    <button class="btn text-info" onclick="speakWord('${words[i].word}')">
                        <i class="fas fa-volume-up"></i>
                    </button> ${words[i].word} :
                </h5> ${words[i].translation}
            </li>
            <hr>
            `
    }
}
showList()

//ao clicar no botão pesquisar procura por uma palavra no array e mostra abaixo dos botões
btnSearch.addEventListener('click', ()=>{
    if(typedWord.value === ''){alert("Digite uma palavra ou trecho para pesquisar.")}
    if(foundWords === 0){alert('Palavra não encontrada!')}
    searchWord()
})

typedWord.addEventListener('keyup', ()=>{
    searchWord()
})

function searchWord(){
    let foundWords = 0
    const foundWord = document.querySelector('#found-word')
    const typedWordLower = typedWord.value.toLowerCase()
    foundWord.innerHTML = ''
    for(let i = 0; i < words.length; i++){
        let wordSlice = words[i].word.slice(0, typedWord.value.length)
        if(typedWordLower === wordSlice){
            foundWords++
            foundWord.innerHTML += `
                <h5 class='ml-1'>
                    <button class="btn" onclick="speakWord('${words[i].word}')">
                        <i class="fas fa-volume-up"></i>
                    </button> ${words[i].word} :
                </h5> <p class='ml-1'>${words[i].translation}</p>
                <hr>
            `
        }
        
    }   
    foundNumber.innerHTML = foundWords  
    console.log('encontradas:'+ foundWords)
    
}

function speakWord(wordToConvert){
    let wordToSay = new SpeechSynthesisUtterance()
    console.log(wordToConvert)
    wordToSay.text = wordToConvert
    wordToSay.lang = 'en'
    wordToSay.rate = 0.8
    wordToSay.volume = 1
    window.speechSynthesis.speak(wordToSay)
}
