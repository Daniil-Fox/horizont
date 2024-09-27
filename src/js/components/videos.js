const videoProdContainer = document.querySelectorAll('[data-video-container]')
const popupVideo = document.querySelector('.popup-video')
if(videoProdContainer.length > 0){
  videoProdContainer.forEach(cont => {
    const videoSrc = cont.querySelector('[data-video-src]')
    const videoPlay = cont.querySelector('[data-video-btn]')
    videoPlay.addEventListener('click', e => {
      popupVideo.querySelector('iframe').src = videoSrc.dataset.videoSrc
      popupVideo.classList.toggle('active')
    })
  })
}
