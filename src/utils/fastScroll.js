export const fastScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 70;
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const instantScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 70;
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'auto'
    });
  }
}; 