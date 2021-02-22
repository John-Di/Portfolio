


export const Lock = (mainEl, scrollTop, isScrollLocked) => {
  // console.log('Lock', document.documentElement.scrollTop, window.pageYOffset);
  mainEl.current.style.top = -scrollTop + 'px';
  document.documentElement.classList.add('scroll-lock');
  document.body.classList.add('scroll-lock');
  document.ontouchmove = (e) => isScrollLocked && e.preventDefault();
}

export const Unlock = (SaveScrollTop) => {
  SaveScrollTop(document.documentElement.scrollTop);
  // console.log('Unlock', document.documentElement.scrollTop, window.pageYOffset);
  document.documentElement.classList.remove('scroll-lock');
  document.body.classList.remove('scroll-lock');
}

const HandleScrollLock = (mainEl, isScrollLocked) => {
  if (!mainEl) {
    return;
  }
  // console.log('HandleScrollLock headerIsActive', !isScrollLocked);
  // !isScrollLocked ? Unlock() : Lock();
};

export default HandleScrollLock;