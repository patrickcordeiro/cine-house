const sites = [
    'www.google.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.twitter.com',
]

function adicionarHttp(url){
    return 'http://' + url
}
console.log("antes", sites)
const novoArray = sites.map(adicionarHttp)
console.log("depois", novoArray)
