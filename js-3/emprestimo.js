const idade = prompt("Qual sua idade:");
const renda = prompt("Qual sua renda?");
const valorEmprestimo = prompt("Qual valor do emprestimo?");

if (idade >= 25 || idade <= 65){
  alert(`Sua idade precisa ser entre 25 e 65 anos! O valor digitado foi ${idade}`);
}

else if (valorEmprestimo < 1000){
  alert(`Sua renda precisa ser igual ou maior que R$15000,00. A renda digitada foi de R$${renda}`);
}

else if (valorEmprestimo < 1500){
  alert(`Sua renda precisa ser superior a 1500, a renda informada foi de R$${renda}`);
}

else if (valorEmprestimo < 1000 || valorEmprestimo > renda * 10){
  alert(`O valor requisitado de R$${renda} não pode ser emprestado`);
}

else {
  alert("Parabens! emprestimo aprovado");
}
