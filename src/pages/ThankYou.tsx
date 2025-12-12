import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Phone, MessageCircle, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Your message has been successfully sent.
            </p>

            {/* Callback Promise */}
            <div className="glass-card p-8 mb-8">
              <p className="text-lg text-foreground mb-2">
                Our team will contact you within
              </p>
              <p className="text-4xl font-bold text-primary mb-4">
                15 Minutes
              </p>
              <p className="text-muted-foreground text-sm">
                During business hours (Mon-Sat, 8AM-6PM CST)
              </p>
            </div>

            {/* Quick Contact */}
            <div className="glass-card p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                Need immediate assistance? Contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+12402427810">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (240) 242-7810
                  </Button>
                </a>
                <a href="https://wa.me/15797013943" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto border-[#25D366]/50 hover:bg-[#25D366]/10">
                    <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Back Button */}
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
