const cinema = 'Cine House'

const catalogo = require('./database/catalogo.json')

console.log('Bem vindo')
function adicionarFilme(titulo, duracao, atores, anoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length, 
    titulo, 
    duracao, 
    atores, 
    anoLancamento, 
    emCartaz
  }
  const novoTamanhoDoCatalogo = catalogo.push(novoFilme)
  console.log('Filme adicionado com sucesso, catálogo agora tem ' + novoTamanhoDoCatalogo + ' filme(s)')
}

function buscarFilme(codigo) {
  const filmeBuscado = catalogo[codigo]
  if(!filmeBuscado) {
    console.log('Filme não encontrado')
    return
  }
  if(filmeBuscado.emCartaz) {
    console.log(filmeBuscado.titulo + ", " + filmeBuscado.duracao + " horas, ano " + filmeBuscado.anoLancamento + ", em cartaz")
  } else {
    console.log(filmeBuscado.titulo + ", " + filmeBuscado.duracao + " horas, ano " + filmeBuscado.anoLancamento + ", fora de cartaz")
  }
  return filmeBuscado
}

function alterarStatusEmCartaz(codigo) {
  const filmeAlterar = buscarFilme(codigo)
  if(filmeAlterar.emCartaz) {
    filmeAlterar.emCartaz = false
  } else {
    filmeAlterar.emCartaz = true
  }
  console.log('Status em cartaz alterado, novo status: ' + filmeAlterar.emCartaz)
}

function verificaSeFilmeEDeLongaDuracao(filme) {
  return filme.duracao >= 2
}

function listarFilmesDeLongaDuracao() {
  const filmesDeLongaDuracao = catalogo.filter(verificaSeFilmeEDeLongaDuracao)
  console.log(filmesDeLongaDuracao)
}