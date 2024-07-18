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
