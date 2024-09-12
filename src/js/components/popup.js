const popup = document.querySelectorAll('.popup')

if(popup.length > 0){
  const popupRecall = document.querySelector('.popup-recall')
  const popupCons = document.querySelector('.popup-cons')
  const popupButtons = document.querySelectorAll('[data-popup-btn]')

  popup.forEach(el => {
    const btnClose = el.querySelector('.popup__close')
    const body = el.querySelector('.popup__body')


    btnClose.addEventListener('click', e => {
      el.classList.remove('active')
    })
    el.addEventListener('click', e => {
      el.classList.remove('active')
    })
    body.addEventListener('click', e => e.stopPropagation())
  })

  popupButtons.forEach(btn => {
    const dataset = btn.dataset.popupBtn

    btn.addEventListener('click', e => {
      e.preventDefault()
      if(dataset == "cons"){
        popupCons.classList.add('active')
      }
      if(dataset == "recall"){
        popupRecall.classList.add('active')
      }
    })
  })
}
