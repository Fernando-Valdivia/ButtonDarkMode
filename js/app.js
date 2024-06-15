document.getElementById('mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
  // Cambiar el texto del botón
  if (document.body.classList.contains('dark-mode')) {
      this.textContent = 'Modo Claro';
  } else {
      this.textContent = 'Modo Oscuro';
  }
});

// Inicializar en modo claro
document.body.classList.add('light-mode');

