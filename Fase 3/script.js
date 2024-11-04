let currentImageIndex = 1;
const totalImages = 3;

function trocar() {
    document.getElementById(`image${currentImageIndex}`).style.display = "none";
    currentImageIndex = (currentImageIndex % totalImages) + 1;
    document.getElementById(`image${currentImageIndex}`).style.display = "block";
}

function addMateria() {
    const input = document.getElementById('campoMateria'); 
    const materia = input.value.trim(); 

    if (materia) { 
        const itemLista = document.getElementById('itemLista'); 
        const novoItem = document.createElement('li'); 
        novoItem.textContent = materia; 

        itemLista.appendChild(novoItem); 
        input.value = ''; 
    } else {
        alert('Por favor, insira o nome de uma matéria.');
    }
}

let UC = document.querySelectorAll(".UC");
let botaoSubir = document.querySelectorAll(".botaoSubir");
let botaoDescer = document.querySelectorAll(".botaoDescer");

botaoSubir.forEach((botao,key)=> {
    botao.addEventListener("click",()=>{
        let textoUCatual = UC[key].textContent;
        UC[key].textContent = UC[key - 1].textContent;
        UC[key - 1].textContent = textoUCatual;
    })
});

botaoDescer.forEach((botao,key)=> {
    botao.addEventListener("click",()=>{
        let textoUCatual = UC[key].textContent;
        UC[key].textContent = UC[key + 1].textContent;
        UC[key + 1].textContent = textoUCatual;
    })
});

function addSobreMim() {
    const sobreMim = document.getElementById("campoSobreMim"); 
    const pessoal = sobreMim.value.trim(); 

    if (pessoal) { 
        const itemLista = document.getElementById('listaSobreMim'); 
        const novoItem = document.createElement('li'); 
        novoItem.textContent = pessoal; 

        itemLista.appendChild(novoItem); 
        sobreMim.value = ''; 
    } else {
        alert('Por favor, insira o Sobre Mim.');
    }
}

let CPF = document.querySelector(".CPF");
let Email = document.querySelector(".Email");
let botaoForm = document.querySelector(".botaoForm");
let msgErroCPF = document.querySelector(".MensagemDeErroCPF");
let msgErroEmail = document.querySelector(".MensagemDeErroEmail");

botaoForm.addEventListener("click", ()=>{
    let conteudoCPF = CPF.value;
    let conteudoEmail = Email.value;
    let mascaraCPF = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    let mascaraEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if(mascaraCPF.test(conteudoCPF)){
        msgErroCPF.textContent = "CPF válido!";
    } else{
        msgErroCPF.textContent = "Insira um formato CPF válido!";
    }

    if(mascaraEmail.test(conteudoEmail)){
        msgErroEmail.textContent = "Email válido!";
    } else{
        msgErroEmail.textContent = "Insira um formato de Email válido!";
    }
})
