// Função para calcular a idade
function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
  // Função para atualizar a idade a cada ano
  function atualizarIdade() {
    var dataNascimento = "1999-04-4"; // Data de nascimento no formato "YYYY-MM-DD"
    var idade = calcularIdade(dataNascimento);
    /*document.getElementById("idade").textContent = idade + " anos";*/
    document.getElementById("idade").textContent = "Fundado em 04/04/1999 ,o clube que já possui " + idade + " anos de história";
  }
  
  // Chamada inicial para definir a idade ao carregar a página
  atualizarIdade();
  
  // Atualizar a idade a cada ano
  setInterval(atualizarIdade, 1000 * 60 * 60 * 24 * 365); //1 vez por ano

  /*///////////////////////////////*/

  function voltar() {
    window.history.back();
  }

/*///////////////////////////////////*/
function entrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "kkk@gmail.com" && senha === "123456789") {
      window.location.href = "../unidades.html";
  } else {
      alert("Email ou Senha incorretos! Tente Novamente ou contate o suporte");
  
    }  
}

function entrar_diretoria(){
  const codigo = document.getElementById("codigo").value;
  const senha = document.getElementById("senha").value;

  if (codigo === "001" && senha === "123456789") {
      window.location.href = "../diretoria-index.html";
  } else {
      alert("Email ou Senha incorretos! Tente Novamente ou contate o suporte");
  
    }  
}

function entrar_lideranca(){
  const codigo = document.getElementById("codigo").value;
  const senha = document.getElementById("senha").value;

  if (codigo === "011" && senha === "123456789") {
      window.location.href = "../unidades.html";
  } else {
      alert("Email ou Senha incorretos! Tente Novamente ou contate o suporte");
  
    }  
}

function entrar_dbv(){
  const codigo = document.getElementById("codigo").value;
  const senha = document.getElementById("senha").value;

  if (codigol === "011" && senha === "123456789") {
      window.location.href = "../unidades.html";
  } else {
      alert("Email ou Senha incorretos! Tente Novamente ou contate o suporte");
  
    }  
}
