function adicionarHttp(url) {
    
    return "http://" + url
}

function processar(sites,callback){
    const retorno = []
    for(let contador = 0;contador < sites.length;contador++) {
        const siteAtual = sites[contador]
        const retornoCallback = callback(siteAtual)
        retorno.push(retornoCallback)
    }
    return retorno
}

const sites = [
    'www.google.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.twitter.com',
]

console.log(processar(sites, adicionarHttp))