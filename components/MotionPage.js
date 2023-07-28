import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export default function MotionPage({ children }) {
  return (
    <motion.main
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      exit={{ opacity: 0 }}
      className="flex-grow flex items-start justify-center"
    >
      {children}
    </motion.main>
  );
}