document.getElementById('linkedin').addEventListener('click', redirect);

function redirect() { 
    window.open(
        'https://www.linkedin.com/in/beatrizparente-/',
        '_blank'
    ) 
}

/* Behance CLICK */

document.getElementById('behance').addEventListener('click', redirect);

function redirect() { 
    window.open(
        'https://www.behance.net/beatrizparente3',
        '_blank'
    ) 
}

document.getElementById('redirectBehance').addEventListener('click', redirect);

function redirect() { 
    window.open(
        'https://www.behance.net/gallery/155137151/Criacao-de-marca-pessoal',
        '_blank'
    ) 
}

/* Image POP UP */

function showPopup(imageSrc) {
    // Verifica se a div do popup já existe
    var popup = document.getElementById('popup');
    
    // Cria a div do popup dinamicamente se não existir
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'popup';
      document.body.appendChild(popup);

      var popupImage = document.createElement('img');
      popupImage.src = imageSrc;
      popupImage.alt = 'Imagem ampliada';
      popup.appendChild(popupImage);
    } else {
      // Se a div do popup já existir, atualiza a imagem
      var popupImage = popup.querySelector('img');
      popupImage.src = imageSrc;
    }

    // Exibe o popup ajustando a propriedade display para 'flex'
    popup.style.display = 'flex';
  }

  document.body.addEventListener('click', function (event) {
    // Oculta o popup se o usuário clicar fora da imagem
    if (event.target.id !== 'popup' && !event.target.closest('.card')) {
      var popup = document.getElementById('popup');
      if (popup) {
        popup.style.display = 'none';
      }
    }
  });