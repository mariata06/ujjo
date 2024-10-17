const initMarqueeText = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('.marquee');
    const marqueeContent = document.querySelector('.marquee-content');
    const contentWidth = marqueeContent.scrollWidth; // Ширина исходного содержимого
    const totalWidth = marquee.offsetWidth; // Ширина контейнера

    // Рассчитываем сколько раз нужно повторить содержимое
    const repeatCount = Math.ceil(totalWidth / contentWidth) + 2;

    // Дублируем содержимое несколько раз
    for (let i = 0; i < repeatCount; i++) {
      const clone = marqueeContent.cloneNode(true);
      marquee.appendChild(clone);
    }

    // Устанавливаем минимальную ширину для бесшовной работы
    marqueeContent.style.minWidth = `${contentWidth}px`;
  });

};

export {initMarqueeText};
