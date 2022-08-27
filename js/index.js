const form = document.getElementById('form')
	  modal = document.getElementById('modal')
	  buttonClose = document.getElementById('btn-close')
	  buttonContact = document.getElementById('contact')

buttonClose.addEventListener('click', ()=>{
	modal.style.opacity = "0"
	modal.style.pointerEvents = 'none'
})

buttonContact.addEventListener('click', ()=>{
	modal.style.opacity = "1"
	modal.style.pointerEvents = 'auto'
})