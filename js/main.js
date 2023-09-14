const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', function (event) {
  event.stopPropagation() // 이벤트 버블링 정지! - 버튼을 클릭했을 때 드롭다운 메뉴가 나타나야 함.
  if (basketEl.classList.contains('show')) {
    hideBasket()
  } else {
    showBasket()
  }
})
basketEl.addEventListener('click', function (event) {
  event.stopPropagation() // 이벤트 버블링 정지! - 드롭다운 메뉴 영역을 클릭했을 때 메뉴가 사라지지 않아야 함.
})
window.addEventListener('click', function () {
  hideBasket()
}) // 화면 전체를 클릭했을 때 메뉴가 사라짐.

// 특정 로직을 직관적인 함수 이름으로 묶음.
function showBasket() {
  basketEl.classList.add('show')
}
function hideBasket() {
  basketEl.classList.remove('show')
}

// 검색!
const headerEl = document.querySelector('header')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')

searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed')  //document.docummentElement == html 태그
}
function hideSearch() {
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
}