import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections/Footer';
import { FileText, Download, Shield, Award, Building2, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: 'legal' | 'company' | 'compliance';
}

const documents: Document[] = [
  {
    id: 'business-license',
    name: 'Business License',
    description: 'Official state business license and registration',
    icon: Building2,
    category: 'legal',
  },
  {
    id: 'dealer-license',
    name: 'Equipment Dealer License',
    description: 'Heavy equipment dealer certification',
    icon: Award,
    category: 'legal',
  },
  {
    id: 'insurance-certificate',
    name: 'Insurance Certificate',
    description: 'General liability and cargo insurance coverage',
    icon: Shield,
    category: 'compliance',
  },
  {
    id: 'terms-conditions',
    name: 'Terms & Conditions',
    description: 'Standard terms of sale and purchase agreement',
    icon: FileText,
    category: 'legal',
  },
  {
    id: 'warranty-policy',
    name: 'Warranty Policy',
    description: 'Equipment warranty terms and coverage details',
    icon: ClipboardCheck,
    category: 'company',
  },
  {
    id: 'shipping-policy',
    name: 'Shipping & Delivery Policy',
    description: 'Nationwide delivery terms and logistics information',
    icon: FileText,
    category: 'company',
  },
];

const categoryLabels = {
  legal: 'Legal Documents',
  company: 'Company Policies',
  compliance: 'Compliance & Insurance',
};

export default function Documents() {
  const groupedDocs = documents.reduce((acc, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);

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
              Access our official business documents, licenses, and policies. 
              All documents are available for download.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-10">
            {(Object.keys(groupedDocs) as Array<keyof typeof categoryLabels>).map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {categoryLabels[category]}
                </h2>
                <div className="space-y-3">
                  {groupedDocs[category].map((doc, index) => {
                    const Icon = doc.icon;
                    return (
                      <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                        className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-card border border-border/50 hover:border-border transition-colors duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{doc.name}</h3>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="shrink-0 border-border/50 hover:bg-muted/50"
                          disabled
                        >
                          <Download className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Need a specific document? Contact us at{' '}
              <a href="mailto:sales@yellowcounty.com" className="text-primary hover:underline">
                sales@yellowcounty.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
