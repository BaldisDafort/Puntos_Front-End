document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('selected-color');

    console.log("couleur récupérée depuis local storage :", savedColor);

    if (savedColor) {
      
      if(savedColor != 'red' && savedColor != 'green' && savedColor != 'blue') {
          console.error("la couleur n'existe pas dans les variables CSS");
      }
          document.documentElement.style.setProperty('--selected-color', `var(--${savedColor}-color)`);
          document.documentElement.style.setProperty('--selected-color-transparent', `var(--${savedColor}-color-transparent)`);
    }else{
      console.log('pas de couleur enregistrée dans local storage');
      
    }
  });
  