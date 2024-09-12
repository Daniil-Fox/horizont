const instItems = document.querySelectorAll('.inst-item')

if(instItems.length > 0){
  instItems.forEach(el => {
    const linkCapture = el.querySelector('.inst-item__t')
    el.addEventListener('mouseenter', e => {
      linkCapture.style.maxWidth = linkCapture.scrollWidth + 'px'
    })
    el.addEventListener('mouseleave', e => {
      linkCapture.style.maxWidth = null
    })
  })
}
