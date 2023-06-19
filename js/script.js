
document.getElementById('botao-update').addEventListener('click',()=>{
    gerarConselho()
})

async function conselhoAleatorio(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function gerarConselho(){
    const conselho = await conselhoAleatorio()
    const idAdvice = `Advice #${conselho.slip.id}`
    document.getElementById('numero').innerHTML = idAdvice

    const advice = `"${conselho.slip.advice}"`
    document.getElementById('message').innerHTML = advice

}

