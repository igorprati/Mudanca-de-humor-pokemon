// DEFINIR DADOS INICIAIS

const pokemon = {
    nome: 'Charmander',
    ataque: '35',
    defesa: '50',

    evolucao: false,
    
    imagemCharizard: 'https://wiki.pokexgames.com/images/6/6b/6_-_Charizard.gif',
    imagemCharmander: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2a5ed19-821d-468d-97f8-a40ad04ce7c2/dbm69i8-237e2849-de0d-4a58-8eb9-ec94c13e0153.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTJhNWVkMTktODIxZC00NjhkLTk3ZjgtYTQwYWQwNGNlN2MyXC9kYm02OWk4LTIzN2UyODQ5LWRlMGQtNGE1OC04ZWI5LWVjOTRjMTNlMDE1My5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._3rLeSzwLypiZYGUQwFDlrjajGhWAen2WrEkY05w-PQ"
}

// ATUALIZAR DADOS

const elementoNome = document.getElementById('nome');
const elementoAtaque = document.getElementById('ataque');
const elementoDefesa = document.getElementById('defesa');

elementoNome.innerText = pokemon.nome;
elementoAtaque.innerText = pokemon.ataque;
elementoDefesa.innerText = pokemon.defesa;

// EVOLUÇÃO
const botaoEvoluir = document.getElementById('evoluir');

function evoluir(){
    const elementoImagem = document.getElementById('imagem');
    const blocoEvolucao = document.getElementById('bloco-evolucao');

    if (pokemon.evolucao){
        elementoImagem.src = pokemon.imagemCharizard;
        blocoEvolucao.innerText = pokemon.nome + ' evoluiu!';
        elementoNome.innerText = 'Charizard'
        botaoEvoluir.innerText = 'Voltar evolução'
    } else{
        elementoNome.innerText = 'Charmander'
        botaoEvoluir.innerText = 'Evoluir!'
        elementoImagem.src = pokemon.imagemCharmander;
        blocoEvolucao.innerText = pokemon.nome + ' não está evoluido..';
    }
}

evoluir();

// EVOLUIR POKEMON
botaoEvoluir.addEventListener('click', function(){

    pokemon.evolucao = !pokemon.evolucao;
    evoluir();
})

