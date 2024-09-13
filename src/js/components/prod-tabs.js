const prodTabs = document.querySelectorAll('.prod-chars__tab')

if(prodTabs.length > 0){
  const tabsContent = document.querySelectorAll('.prod-chars__content')

  function clearActive(){
    tabsContent.forEach(el => el.classList.remove('active'))
    prodTabs.forEach(el => el.classList.remove('active'))
  }
  prodTabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const value = tab.dataset.tab
      const currentContent = document.querySelector(`.prod-chars__content[data-tab-content="${value}"]`)
      clearActive()
      tab.classList.add('active')
      currentContent.classList.add('active')
    })
  })
}
