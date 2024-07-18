// Theme Toggle
const mode = localStorage.getItem('mode') || ''
const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')

document.body.className = mode

toggle.addEventListener('click', () => {
  console.log('click')
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

console.log('search')

// Fetch the search index
fetch('/index.json')
  .then((response) => response.json())
  .then((data) => {
    searchIndex = data
  })

function performSearch() {
  console.log('performing search')
  const query = document.getElementById('searchInput').value.toLowerCase()
  const resultsContainer = document.getElementById('searchResults')
  resultsContainer.innerHTML = ''

  if (query.length < 2) {
    resultsContainer.style.display = 'none'
    return
  }

  const results = searchIndex.filter((item) => item.title.toLowerCase().includes(query))

  if (results.length > 0) {
    results.forEach((item) => {
      const div = document.createElement('div')
      div.innerHTML = `<a href="${item.permalink}">${item.title}</a>`
      resultsContainer.appendChild(div)
    })
    resultsContainer.style.display = 'block'
  } else {
    resultsContainer.innerHTML = '<div>No results found</div>'
    resultsContainer.style.display = 'block'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput')
  console.log('here')
  searchInput.addEventListener('input', performSearch)
})
