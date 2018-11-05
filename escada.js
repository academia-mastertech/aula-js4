let degrau = Number(prompt("Quantos degraus vc quer subir?"));
let i = 0;
let simbolo = prompt("Digite o simbolo da sua escada");
let escada = "";

console.log(simbolo);
while (i < degrau) {
  escada += simbolo;
  console.log(escada);
  i++
}
