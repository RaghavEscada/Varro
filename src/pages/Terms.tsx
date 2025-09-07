import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the Varro Group website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Varro Group is a private investment firm that acquires owner-operated businesses with a 
                long-term ownership approach. We provide:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Business acquisition services</li>
                <li>Due diligence and evaluation services</li>
                <li>Partnership and transition support</li>
                <li>Long-term business stewardship</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                All discussions, information, and materials shared with Varro Group are treated with strict 
                confidentiality. We understand the sensitive nature of business sale discussions and maintain 
                the highest standards of discretion.
              </p>
              <p className="text-muted-foreground mb-4">
                By engaging with our services, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>All information shared will be kept confidential</li>
                <li>We will not disclose your business information to third parties without consent</li>
                <li>We may use your information solely for evaluation purposes</li>
                <li>Confidentiality obligations survive termination of discussions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. No Obligation</h2>
              <p className="text-muted-foreground mb-4">
                Initial discussions and evaluations are provided on a no-obligation basis. Neither party 
                is committed to any transaction until a formal agreement is executed. We reserve the right 
                to decline any opportunity at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Investment Criteria</h2>
              <p className="text-muted-foreground mb-4">
                Our investment criteria include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Revenue under $10 million</li>
                <li>EBITDA greater than $1 million</li>
                <li>Recurring revenue streams</li>
                <li>Strong customer retention</li>
                <li>Sustainable competitive advantages</li>
                <li>Owner considering retirement or transition</li>
              </ul>
              <p className="text-muted-foreground">
                These criteria are guidelines and may be modified at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Due Diligence Process</h2>
              <p className="text-muted-foreground mb-4">
                Our due diligence process may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Financial statement review</li>
                <li>Operational assessment</li>
                <li>Market analysis</li>
                <li>Legal and regulatory review</li>
                <li>Management and team evaluation</li>
                <li>Customer and supplier interviews</li>
              </ul>
              <p className="text-muted-foreground">
                This process is conducted respectfully and efficiently to minimize disruption to your business.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Varro Group shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
                other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on this website, including text, graphics, logos, and software, is the property 
                of Varro Group and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms shall be governed by and construed in accordance with the laws of Australia, 
                without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from these terms or our services shall be resolved through binding 
                arbitration in accordance with the rules of the Australian Centre for International 
                Commercial Arbitration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting on our website. Your continued use of our services constitutes acceptance of 
                the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> hello@varro.com.au
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Phone:</strong> 0408-023-231
                </p>
                <p className="text-muted-foreground">
                  <strong>Website:</strong> www.varro.com.au
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
