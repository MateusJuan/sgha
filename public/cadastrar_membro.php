<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "sgha_teste";
$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}

$nome = $_POST['nome'];
$sobre_nome = $_POST['sobre_nome'];
$email = $_POST['email'];
$dataNasc = $_POST['dataNasc'];
$dataIngre = $_POST['dataIngre'];
$dataInves = $_POST['dataInves'];

// Corrigir a instrução SQL
$sql = "INSERT INTO usuarios (nome, sobre_nome, email, dataNasc, dataIngre, dataInves) VALUES ('$nome', '$sobre_nome', '$email', '$dataNasc', '$dataIngre', '$dataInves')";
if ($conexao->query($sql) === TRUE) {
    echo "<script>
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'index.html';
    </script>";
} else {
    echo "<script>
        alert('Erro ao realizar cadastro: " . $conexao->error . "');
        window.location.href = 'cadastro_de_membros.html';
    </script>";
}

$conexao->close();
?>
