const mode = localStorage.getItem('mode') || ''
const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')

if (mode === 'light') {
  body.classList.add('light')
}

toggle.addEventListener('click', () => {
  const newMode = body.classList.contains('light') ? '' : 'light'
  localStorage.setItem('mode', newMode)
  body.classList.toggle('light')
})