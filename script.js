let  idade  =  18
let  condicaoHumana  =  true  
let  janeiro  =  true
let  dezembro  =  true
const  nome  =  "Willian"
let  primeiraLetraDoNome  =  "W" 
const  sobrenome  =  "Campos"
let  qtdLetrasSobrenome  =  6

if  ( idade  >=  18 )
    console.log(nome  +  "maior de idade!");

if  ( ( idade  >=  18 )  &&  ( condicaoHumana  ===  true ) ) 
    console.log(nome  +  " humano maior de idade!");

if  ( ( janeiro  ===  true )  ||  ( dezembro  ===  true ) )
    console.log("Feliz Aniversário!");

if  ( primeiraLetraDoNome === " W " )
    console.log(nome  +  ", seu nome começa a letra W.");

if  ( ( qtdLetrasSobrenome  >=  6 )  ||  ( primeiraLetraDoNome  ===  W ) )  
    console.log(nome  +  ", seu sobrenome tem mais de 6 letras, porém seu nome começa com a letra W");
