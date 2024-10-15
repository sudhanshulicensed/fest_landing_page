export const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
export const isLargeScreen = () => window.matchMedia("(min-width: 768px)").matches;