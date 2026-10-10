// Measure the actual placement rather than relying on a theme's container classes.
export function fitMobileWidth(root) {
  const view = root.ownerDocument.defaultView;
  const mobile = view.matchMedia('(max-width: 860px)');
  let frame;
  const clear = () => {
    root.removeAttribute('data-svv-mobile-width');
    for (const name of ['width', 'left', 'right']) root.style.removeProperty(`--svv-mobile-${name}`);
  };
  const update = () => {
    clear();
    if (!mobile.matches || !root.isConnected) return;
    // Measure without auto centering, which changes when the width expands.
    root.style.setProperty('--svv-mobile-width', '100%');
    root.style.setProperty('--svv-mobile-left', '0px');
    root.style.setProperty('--svv-mobile-right', '0px');
    root.setAttribute('data-svv-mobile-width', '');
    const rect = root.getBoundingClientRect();
    if (!rect.width) { clear(); return; }
    const width = root.ownerDocument.documentElement.clientWidth;
    root.style.setProperty('--svv-mobile-width', `${width}px`);
    root.style.setProperty('--svv-mobile-left', `${-rect.left}px`);
    root.style.setProperty('--svv-mobile-right', `${rect.right - width}px`);
    root.setAttribute('data-svv-mobile-width', '');
  };
  const schedule = () => {
    view.cancelAnimationFrame(frame);
    frame = view.requestAnimationFrame(update);
  };
  const observer = new view.ResizeObserver(schedule);
  observer.observe(root.parentElement);
  view.addEventListener('resize', schedule);
  mobile.addEventListener('change', schedule);
  update();
  return () => {
    observer.disconnect();
    view.removeEventListener('resize', schedule);
    mobile.removeEventListener('change', schedule);
    view.cancelAnimationFrame(frame);
    clear();
  };
}
