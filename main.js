var animData = {
  container: $('#svg_anim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/data.json'
};
var anim = bodymovin.loadAnimation(animData);
window.onresize = anim.resize.bind(anim);
