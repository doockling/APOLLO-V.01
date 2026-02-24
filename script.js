
  const audio = new Audio()
  audio.src = "IMAGENS/clique.mp3"
  
  function playSound(url, goBack = false) {
    audio.currentTime = 0
    audio.play()
    setTimeout(() => {
      if (goBack) {
        history.back()
      } else {
        location.href = url
      }
    }, 100)
  }
