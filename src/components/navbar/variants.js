export const navContainerVariants = {
  initial: {
    y:'-80px'
  },
  animate: {
    y:0,
    transition: {
      type: 'tween',
      // stiffness: 200,
      // mass:1,
      // damping: 16,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const navLogoVariants = {
  initial: {
    x:'-275px'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
    },
  },
}

export const navChildVariants = {
  initial: {
    y:'-100px'
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
    },
  },
}

export const navToggleSwitchVariants = {
  initial: {
    x:'275px'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
    },
  },
}