// login.js

// Configurando a instância do Supabase
const { createClient } = supabase;
const supabaseUrl = 'https://ujgpoucwkivujqmhgsfr.supabase.co';
const supabaseKey = 'sua-chave-de-api'; // Substitua pela sua chave de API
const supabase = createClient(supabaseUrl, supabaseKey);

// Selecionando o formulário e adicionando um ouvinte de evento
const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    const codigo = document.getElementById('codigo').value; // Aqui você pode usar 'codigo_completo' se necessário
    const senha = document.getElementById('senha').value;

    // Obtendo os dados da tabela 'usuarios'
    const { data, error } = await supabase
        .from('usuarios') // Nome da tabela
        .select('id, senha') // Seleciona 'id' e 'senha'
        .eq('nome_completo', codigo) // Verifica o nome completo (ou o que você definir como código)
        .single(); // Obtém um único registro

    // Tratando erros de obtenção de dados
    if (error) {
        console.error('Erro ao obter dados:', error);
        alert('Erro ao buscar usuário. Tente novamente.');
        return;
    }

    // Verificando se a senha corresponde
    if (data && data.senha === senha) {
        console.log('Login bem-sucedido! ID do usuário:', data.id);
        alert('Login bem-sucedido!');
        // Redirecionar ou realizar outra ação após o login bem-sucedido
    } else {
        alert('Código de usuário ou senha inválidos.');
    }
});
