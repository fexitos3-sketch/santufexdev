
const container = document.querySelector('.floating-icons');
const emojis = ['🤖', '⛏️', '💎', '⚡'];

for (let i = 0; i < 10; i++) {
  const el = document.createElement('div');
  el.className = 'icon';
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = Math.random() * 100 + 'vh';
  el.style.animationDelay = Math.random() * 5 + 's';
  el.style.animationDuration = (5 + Math.random() * 4) + 's';
  container.appendChild(el);
}

const buttons = document.querySelectorAll('.nav-btn');
const tabs = document.querySelectorAll('.tab-content');

function showTab(tabName) {
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.id === 'tab-' + tabName);
  });
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

// Marcar "Principal" como activo al cargar
showTab('principal');
