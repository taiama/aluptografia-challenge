const textArea = document.querySelector("textarea");
const buttonCriptografar = document.querySelector("#criptografar");
const buttonDescriptografar = document.querySelector("#descriptografar");
const divSaidaDeTexto = document.querySelector(".saidaDeTexto");

function criptografar(texto) {
  const textoParaArray = texto.toLowerCase().split("");
  const textoCriptografado = textoParaArray
    .map((item) => {
      if (item == "a") {
        item = "ai";
      }
      if (item == "e") {
        item = "enter";
      }
      if (item == "i") {
        item = "imes";
      }
      if (item == "o") {
        item = "ober";
      }
      if (item == "u") {
        item = "ufat";
      }
      return item;
    })
    .join("");
  return textoCriptografado;
}

function descriptografar(texto) {
  const matriz = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  for (let i = 0; i < matriz; i++) {
    if (texto.includes(matriz[i][0])) {
      texto.replaceAll(matriz[i][0]);
    }
  }
  return texto;
}

function copiarTexto(texto) {
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado para a Área de Transferência!");
    })
    .catch((error) => {
      alert("Algo deu errado. :( Por favor, tente novamente.");
    });
}

buttonCriptografar.addEventListener("click", () => {
  let textoCriptografado = criptografar(textArea.value);
  if (!textArea.value) {
    alert("Por favor, insira um texto.");
    return;
  }
  divSaidaDeTexto.innerHTML = `
    <p id="textoOutput">${textoCriptografado}</p>
    <button id="botaoCopiar">Copiar</button>
  `;
  buttonCopiarTexto = document.querySelector("#botaoCopiar");
  buttonCopiarTexto.addEventListener("click", () => {
    copiarTexto(textoCriptografado);
  });
});

buttonDescriptografar.addEventListener("click", () => {
  let textoDescriptografado = descriptografar(textArea.value);
  if (!textArea.value) {
    alert("Por favor, insira um texto.");
    return;
  }
  divSaidaDeTexto.innerHTML = `
      <p id="textoOutput">${textoDescriptografado}</p>
      <button id="botaoCopiar">Copiar</button>
    `;
  buttonCopiarTexto = document.querySelector("#botaoCopiar");
  buttonCopiarTexto.addEventListener("click", () => {
    copiarTexto(textoDescriptografado);
  });
});
