function img(src: string, alt: string) {
  const elem = document.createElement('img');
  elem.src = src;
  elem.alt = alt;
  
  return elem;
}

export default img;