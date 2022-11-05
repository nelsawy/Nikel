
// "const" é uma constante e seu valor não pode ser alterado.
const nome = "Nasser Saad";
// já a "let" pode ter valor alterado como demonstrado abaixo.
let nome2 = "";
let pessoaDefault = {
    nome: "Nasser Saad El Sawy",
    idade: "46",
    trabalho: "Programador"
}

let nomes = ["Nasser Saad", "Jane", "Augusto"];
let pessoas = [
    {
        nome: "Nasser Saad",
        idade: "46",
        trabalho: "Programador"
    },
    {
        nome: "Angelo",
        idade: "26",
        trabalho: "Programador"
    }
];

// "console.log" é comando que faz aparecer no console do navegador o valor inserido entre parênteses.

// aqui um exemplo de função para alterar um nome.
function alterarNome() {
    nome2 = "James Webb"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);

}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

adicionarPessoa({
    nome: "Jane",
    idade: "46",
    trabalho: "D.de Casa",
});

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome:"Nasser Saad El Sawy",
//     idade:"46",
//     trabalho:"Platform Engineer"
// });




// aqui o comando para chamar a função para que seja executada.
//recebeEalteraNome("Kepler");
//recebeEalteraNome("Huygens");
//alterarNome();