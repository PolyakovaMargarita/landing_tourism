export const scrollToTopRatedBlock = (element: string) => {
  const topRatedBlockWrapper = document.getElementById(element);
  if (topRatedBlockWrapper) {
    topRatedBlockWrapper.scrollIntoView({ behavior: "smooth" });
  }
};
