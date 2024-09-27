const popup = document.querySelectorAll('.popup')

if(popup.length > 0){
  const popupRecall = document.querySelector('.popup-recall')
  const popupCons = document.querySelector('.popup-cons')
  const popupButtons = document.querySelectorAll('[data-popup-btn]')
  const bodyDOM = document.body
  popup.forEach(el => {
    const btnClose = el.querySelectorAll('.popup__close')
    const body = el.querySelector('.popup__body')


    btnClose.forEach(btn => {
      btn.addEventListener('click', e => {
        el.classList.remove('active')
        bodyDOM.style.overflow = null;
      })
    })
    el.addEventListener('click', e => {
      el.classList.remove('active')
      bodyDOM.style.overflow = null;
    })
    body.addEventListener('click', e => e.stopPropagation())
  })

  popupButtons.forEach(btn => {
    const dataset = btn.dataset.popupBtn

    btn.addEventListener('click', e => {
      e.preventDefault()
      if(dataset == "cons"){
        popupCons.classList.add('active')
        bodyDOM.style.overflow = 'hidden'
      }
      if(dataset == "recall"){
        popupRecall.classList.add('active')
        bodyDOM.style.overflow = 'hidden'
      }
    })
  })
}
