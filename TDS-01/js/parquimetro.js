function calcularParquimetro() {
  const inputValor = document.getElementById('valor');
  const resultado = document.getElementById('resultado');

  const valor = Number(inputValor.value.replace(',', '.'));

  if (!inputValor.value || isNaN(valor) || valor <= 0) {
    resultado.innerText = 'Informe um valor válido.';
    return;
  }

  let tempo = 0;
  let troco = 0;

  if (valor >= 3.00) {
    tempo = 120;
    troco = valor - 3.00;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else if (valor >= 1.00) {
    tempo = 30;
    troco = valor - 1.00;
  } else {
    resultado.innerText = 'Valor insuficiente.';
    return;
  }

  let mensagem = `Tempo de permanência: ${tempo} min`;

  if (troco > 0) {
    mensagem += `Troco: R$ ${troco.toFixed(2)}`;
  } else {
    mensagem += `Troco: R$ 0.00`;
  }

  resultado.innerText = mensagem;
}

document.getElementById('btnCalcular').addEventListener('click', calcularParquimetro);
