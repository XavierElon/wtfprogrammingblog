// Theme Toggle
const mode = localStorage.getItem('mode') || ''
const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')

document.body.className = mode

toggle.addEventListener('click', () => {
  localStorage.setItem('mode', mode === 'light' ? '' : 'light')
  body.classList.toggle('light')
})

// Font Selector
const fontSelector = document.querySelector('.fontSelector')

// Set initial font based on localStorage or default to Tesla
const savedFont = localStorage.getItem('font') || 'Tesla'
body.className = `font-${savedFont}`
fontSelector.value = savedFont

fontSelector.addEventListener('change', (e) => {
  console.log(e.target.value)
  const selectedFont = e.target.value
  body.className = `font-${selectedFont}`
  localStorage.setItem('font', selectedFont)
})
