const initMarqueeText = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('.marquee');
    const marqueeContent = document.querySelector('.marquee-content');
    const contentWidth = marqueeContent.scrollWidth; // Ширина содержимого
    const totalWidth = marquee.offsetWidth; // Ширина контейнера

    // Рассчитываем количество повторений, чтобы заполнить ширину контейнера и добавить запас для плавной анимации
    const repeatCount = Math.ceil(totalWidth / contentWidth) + 2;

    // Дублируем содержимое несколько раз для создания бесшовного эффекта
    for (let i = 0; i < repeatCount; i++) {
      const clone = marqueeContent.cloneNode(true);
      marquee.appendChild(clone);
    }
  });

};

export {initMarqueeText};
