/* THEME TOGGLE */
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

/* FONT SELECTOR */
const fontSelector = document.querySelector('.fontSelector')

// Set initial font based on localStorage or default to CYBERPUNK
const savedFont = localStorage.getItem('font') || 'Tesla'
document.body.style.fontFamily = savedFont
fontSelector.value = savedFont

fontSelector.addEventListener('change', (e) => {
  const selectedFont = e.target.value
  document.body.style.fontFamily = selectedFont
  localStorage.setItem('font', selectedFont)
})

/* Search */
let searchIndex

// Fetch the search index
fetch('/index.json')
  .then((response) => response.json())
  .then((data) => {
    searchIndex = data
  })

function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase()
  const listContainer = document.querySelector('.list')

  if (query.length < 2) {
    // If the query is too short, show all posts
    document.querySelectorAll('.listItem').forEach((item) => {
      item.style.display = 'flex'
    })
    return
  }

  document.querySelectorAll('.listItem').forEach((item) => {
    const title = item.querySelector('.listItemTitle a').textContent.toLowerCase()
    const categories = Array.from(item.querySelectorAll('.listItemCategory')).map((category) => category.textContent.toLowerCase())

    if (title.includes(query) || categories.some((category) => category.includes(query))) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput')
  if (searchInput) {
    searchInput.addEventListener('input', performSearch)
  }
})

/* BUTTON */
const button = document.querySelector('.magic-button')
let hue = 0

function updateColors() {
  hue = (hue + 1) % 360
  button.style.setProperty('--color-1', `hsl(${hue}deg, 100%, 45%)`)
  button.style.setProperty('--color-2', `hsl(${(hue + 30) % 360}deg, 100%, 45%)`)
  button.style.setProperty('--color-3', `hsl(${(hue + 60) % 360}deg, 100%, 55%)`)
  requestAnimationFrame(updateColors)
}

updateColors()

/* DROPDOWN */
document.addEventListener('DOMContentLoaded', function () {
  const categoryToggle = document.querySelector('.category-toggle')
  const dropdownContent = document.querySelector('.dropdown-content')

  categoryToggle.addEventListener('click', function (e) {
    e.preventDefault()
    dropdownContent.classList.toggle('show')
  })

  // Close the dropdown if clicked outside
  window.addEventListener('click', function (e) {
    if (!e.target.matches('.category-toggle')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show')
      }
    }
  })
})
