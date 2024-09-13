const videoProdContainer = document.querySelector('.prod-video')

if(videoProdContainer){
  const video = videoProdContainer.querySelector('video')
  const videoPlay = videoProdContainer.querySelector('.prod-video__play')

  videoPlay.addEventListener('click', e => {
    videoProdContainer.classList.add('playing')
    video.setAttribute('controls', '')
    video.play()
  })
  video.addEventListener('pause', e => {
    videoProdContainer.classList.remove('playing')
  })
  video.addEventListener('play', e => {
    videoProdContainer.classList.add('playing')
  })
}
