const videoProdContainer = document.querySelectorAll('[data-video-container]')

if(videoProdContainer.length > 0){
  videoProdContainer.forEach(cont => {
    const video = cont.querySelector('[data-video-video]')
    const videoPlay = cont.querySelector('[data-video-btn]')

    videoPlay.addEventListener('click', e => {
      cont.classList.add('playing')
      video.setAttribute('controls', '')
      video.play()
    })
    video.addEventListener('pause', e => {
      cont.classList.remove('playing')
    })
    video.addEventListener('play', e => {
      cont.classList.add('playing')
    })
  })
}
