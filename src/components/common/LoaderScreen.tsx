import { motion, AnimatePresence } from 'framer-motion';

type LoaderScreenProps = {
  isVisible: boolean;
};

export function LoaderScreen({ isVisible }: LoaderScreenProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="loaderScreen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="loaderScreenInner">
            <div className="loaderLogoWrap">
              <div className="loaderRing loaderRingOuter" />
              <div className="loaderRing loaderRingInner" />

              <motion.img
                src="/images/logo.png"
                alt="EES Construction"
                className="loaderLogo"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <motion.p
              className="loaderText"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              EES Construction
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}