/* 
  Дорогой девелопер, обрати внимание: этот файл - один большой костыль
  Зачем все эти танцы с бубном, если можно просто дать <html> scroll-behavior: smooth
  (смотри style.css)

  Двоюшник, если не знал о scroll-behavior: smooth
*/

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }