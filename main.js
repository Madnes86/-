
// SLIDER
let currentIndex = 0;
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.slider__dot');
const intervalTime = 7000;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('slider__slide--active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('slider__dot--active', i === index);
  });
  const offset = -index * 100;
  document.querySelector('.slider__slides').style.transform = `translateX(${offset}%)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}

slideInterval = setInterval(nextSlide, intervalTime);

// Initialize the slider
showSlide(currentIndex);

// SORT
document.addEventListener('DOMContentLoaded', function() {
  const tagsContainer = document.querySelector('.news__tags');
  const newsItems = document.querySelectorAll('.advert');
  const activeTags = new Set();

  // Обработчик кликов по тегам
  tagsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('tag')) {
      const tag = event.target.dataset.tag;

      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        event.target.classList.remove('active');
      } else {
        activeTags.add(tag);
        event.target.classList.add('active');
      }

      filterNews();
    }
  });

  function filterNews() {
    newsItems.forEach(item => {
      const itemTags = Array.from(item.querySelectorAll('.advert__footer')).map(tagElem => tagElem.textContent.trim());
      const hasActiveTag = Array.from(activeTags).some(tag => itemTags.includes(tag));

      if (activeTags.size === 0 || hasActiveTag) {
        item.style.display = 'flex'; // Показать элемент
      } else {
        item.style.display = 'none'; // Скрыть элемент
      }
    });

    sortNews();
  }

  function sortNews() {
    const newsBox = document.querySelector('.news__box');
    const visibleNewsItems = Array.from(newsItems).filter(item => item.style.display !== 'none');
    
    visibleNewsItems.sort((a, b) => {
      const dateA = new Date(a.querySelector('.advert__footer:first-child').textContent.trim().split('.').reverse().join('-'));
      const dateB = new Date(b.querySelector('.advert__footer:first-child').textContent.trim().split('.').reverse().join('-'));
      return dateB - dateA;
    });

    visibleNewsItems.forEach(item => newsBox.appendChild(item));
  }

  // Установка цветов границы на основе тегов и добавление события hover
  function setBorderColorByTag() {
    newsItems.forEach(item => {
      const tagElement = item.querySelector('.advert__footer:last-child'); // Получаем элемент с тегом
      if (tagElement) {
        const tag = tagElement.textContent.trim();
        const imgElement = item.querySelector('.advert__img');
        const footerElements = item.querySelectorAll('.advert__footer');

        switch(tag) {
          case 'Библиотека':
            imgElement.style.borderBottom = '10px solid #0DEF0D'; // Зеленый
            item.addEventListener('mouseover', () => {
              item.style.backgroundColor = '#0DEF0D';
              footerElements.forEach(footer => {
                footer.style.color = '#0DEF0D';
              });
            });
            item.addEventListener('mouseout', () => {
              item.style.backgroundColor = ''; // Возвращаем исходный цвет
              footerElements.forEach(footer => {
                footer.style.color = '#FFFFFF'; // Возвращаем исходный цвет текста
              });
            });
            break;
          case 'Спорт':
            imgElement.style.borderBottom = '10px solid #FFD700'; // Желтый
            item.addEventListener('mouseover', () => {
              item.style.backgroundColor = '#FFD700';
              footerElements.forEach(footer => {
                footer.style.color = '#FFD700';
              });
            });
            item.addEventListener('mouseout', () => {
              item.style.backgroundColor = ''; // Возвращаем исходный цвет
              footerElements.forEach(footer => {
                footer.style.color = '#FFFFFF'; // Возвращаем исходный цвет текста
              });
            });
            break;
          case 'Медицина':
            imgElement.style.borderBottom = '10px solid #1F91FF'; // Синий
            item.addEventListener('mouseover', () => {
              item.style.backgroundColor = '#1F91FF';
              footerElements.forEach(footer => {
                footer.style.color = '#1F91FF';
              });
            });
            item.addEventListener('mouseout', () => {
              item.style.backgroundColor = ''; // Возвращаем исходный цвет
              footerElements.forEach(footer => {
                footer.style.color = '#FFFFFF'; // Возвращаем исходный цвет текста
              });
            });
            break;
          default:
            imgElement.style.borderBottom = 'none';
        }
      }
    });
  }

  // Первоначальная сортировка и установка цвета границ
  sortNews();
  setBorderColorByTag();
});