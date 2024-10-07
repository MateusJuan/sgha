const { createClient } = supabase;
const supabaseUrl = 'https://ujgpoucwkivujqmhgsfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ3BvdWN3a2l2dWpxbWhnc2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNjc0MzEsImV4cCI6MjA0Mzc0MzQzMX0.bqOMCl05ZpyLZQ0vIeNyylT3bAugW-Z5EGiZHIsJxg8';
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('login-form');
const errorMsg = document.createElement('div');
errorMsg.className = 'error-message'; 
form.appendChild(errorMsg);

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const senha = document.getElementById('senha').value;

    if (!codigo || !senha) {
        errorMsg.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    const { user, error } = await supabase.auth.signInWithPassword({
        email: codigo,
        password: senha,
    });

    if (error) {
        console.error('Erro de autenticação:', error);
        errorMsg.textContent = 'Código de usuário ou senha inválidos.';
        return;
    }

    if (user) {
        console.log('Login bem-sucedido! ID do usuário:', user.id);
        alert('Login bem-sucedido!');
        window.location.href = '../1.html';
    }
});
