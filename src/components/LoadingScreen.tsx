import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo container */}
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
              <span className="text-3xl font-black text-primary-foreground">YS</span>
            </div>

            {/* Brand name */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">
                Yellow<span className="text-primary">Stone</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Premium Equipment</p>
            </div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-muted/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
