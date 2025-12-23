import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections/Footer';
import { FileText, Download, Shield, HelpCircle, Truck, RotateCcw, ScrollText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  file: string;
}

const documents: Document[] = [
  {
    id: 'terms-conditions',
    name: 'Terms & Conditions of Sale',
    description: 'Standard terms of sale and purchase agreement',
    icon: ScrollText,
    file: '/documents/terms-conditions.pdf',
  },
  {
    id: 'warranty-policy',
    name: 'Warranty Policy',
    description: 'Equipment warranty terms and coverage details',
    icon: Award,
    file: '/documents/warranty-policy.pdf',
  },
  {
    id: 'shipping-policy',
    name: 'Shipping & Delivery Policy',
    description: 'Nationwide delivery terms and logistics information',
    icon: Truck,
    file: '/documents/shipping-policy.pdf',
  },
  {
    id: 'refund-policy',
    name: 'Refund & Cancellation Policy',
    description: 'Return and cancellation terms and conditions',
    icon: RotateCcw,
    file: '/documents/refund-policy.pdf',
  },
  {
    id: 'insurance-certificate',
    name: 'Certificate of Insurance',
    description: 'General liability and cargo insurance coverage',
    icon: Shield,
    file: '/documents/insurance-certificate.pdf',
  },
  {
    id: 'faq',
    name: 'Frequently Asked Questions',
    description: 'Common questions about our equipment and services',
    icon: HelpCircle,
    file: '/documents/faq.pdf',
  },
];

export default function Documents() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = name + '.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Company Documents
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Access our official business documents, policies, and certificates.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {documents.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex items-center justify-between p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0 border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                      onClick={() => handleDownload(doc.file, doc.name)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Need a specific document? Contact us at{' '}
              <a href="mailto:sales@yellowstone.equipment" className="text-primary hover:underline">
                sales@yellowstone.equipment
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
