


export const Lock = (mainRef, scrollTop, isScrollLocked) => {
  // console.log('Lock', document.documentElement.scrollTop, window.pageYOffset);
  mainRef.current.style.top = -scrollTop + 'px';
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

const HandleScrollLock = (mainRef, isScrollLocked) => {
  if (!mainRef) {
    return;
  }
  // console.log('HandleScrollLock headerIsActive', !isScrollLocked);
  // !isScrollLocked ? Unlock() : Lock();
};

export default HandleScrollLock;