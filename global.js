document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('headerColor');
    if (savedColor) {
      document.documentElement.style.setProperty('--header-color', savedColor);
    }
  });
  