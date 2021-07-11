export const navContainerVariants = {
  initial: {
    y:'-80px'
  },
  animate: {
    y:0,
    transition: {
      type: 'tween',
      stiffness: 200,
      mass:1,
      damping: 16,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};