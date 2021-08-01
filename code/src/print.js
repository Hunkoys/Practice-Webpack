export default function eat(body) {
  import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerText = _.join(['ako', 'si', 'dom'], ' ');
    body.child(element);
  });
}
