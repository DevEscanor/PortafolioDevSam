export const fastScrollTo = (elementId, offset = -70) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop + offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}; 