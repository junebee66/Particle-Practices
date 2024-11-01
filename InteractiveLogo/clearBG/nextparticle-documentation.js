document.all.logo.dataset.addTimestamp = true;
if (!document.all.logo.dataset.initPosition) {
  document.all.logo.dataset.initPosition = 'none';
}
if (!document.all.logo.dataset.initDirection) {
	document.all.logo.dataset.initDirection = 'none';
}
if (!document.all.logo.dataset.fadePosition) {
  document.all.logo.dataset.fadePosition = 'none';
}
if (!document.all.logo.dataset.fadeDirection) {
	document.all.logo.dataset.fadeDirection = 'none';
}
if (!/359aaa32d2d0f34ea54c7996feca84ba/.test(location.href)) {
  if (!document.all.logo.dataset.width) {
    document.all.logo.dataset.width = ~~window.innerWidth;
  }
  if (!document.all.logo.dataset.height) {
    document.all.logo.dataset.height = ~~window.innerHeight;
  }
}
