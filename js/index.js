/* ==================== MENU MOBILE ==================== */

const botaoMenu = document.getElementById("botao-menu");
const navegacao = document.getElementById("navegacao");

botaoMenu.addEventListener("click", () => {
    navegacao.classList.toggle("ativo");
    const menuAberto = navegacao.classList.contains("ativo");
    if (menuAberto) {
        botaoMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        botaoMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

/* ==================== FECHAR MENU AO CLICAR ==================== */

const linksNavegacao = document.querySelectorAll(".link-navegacao");
linksNavegacao.forEach((link) => {
    link.addEventListener("click", () => {
        navegacao.classList.remove("ativo");
        botaoMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

/* ==================== LINK ATIVO ==================== */

linksNavegacao.forEach((link) => {
    link.addEventListener("click", () => {
        linksNavegacao.forEach((item) => {
            item.classList.remove("ativo");
        });
        link.classList.add("ativo");
    });
});

/* ==================== FORMULÁRIO WHATSAPP ==================== */

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;
    const servico = document.getElementById("servico").value;
    const descricao = document.getElementById("descricao").value;

    const mensagem =
        "Olá! Gostaria de solicitar um orçamento.%0A%0A" +
        "*Nome:* " + nome + "%0A" +
        "*Telefone:* " + telefone + "%0A" +
        "*E-mail:* " + email + "%0A" +
        "*Cidade:* " + cidade + "%0A" +
        "*Serviço:* " + servico + "%0A" +
        "*Descrição:* " + descricao;

    const numeroWhatsApp = "5518997305195";
    const enderecoWhatsApp =
        "https://wa.me/" + numeroWhatsApp + "?text=" + mensagem;
    window.open(enderecoWhatsApp, "_blank");
});
