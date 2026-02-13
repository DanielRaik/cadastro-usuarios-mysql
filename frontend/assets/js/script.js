const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {e.preventDefault();
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, senha })
  });

  const data = await response.json();
  alert(data.message);
});

// modal 
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// abre o modal ao entrar no site
window.onload = () => {
  modal.classList.remove('hidden');
};

// fechar modal 
closeModal.onclick = () => {
  modal.classList.add('hidden');
};

