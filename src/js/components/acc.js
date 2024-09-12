const accContainers = document.querySelectorAll('[data-acc-container]')

if(accContainers.length > 0){
  accContainers.forEach(cont => {
    const btn = cont.querySelector('[data-acc-btn]')
    const content = cont.querySelector('[data-acc-content]')

    btn.addEventListener('click', e => {
      let isActive = cont.classList.toggle('active')

      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
    })
  })
}
