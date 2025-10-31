import { useEffect } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | Munuve Tech';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-terms">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: October 30, 2025
            </p>
          </AnimatedSection>

          <AnimatedSection className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Munuve Tech's services, website, or products, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Munuve Tech provides digital transformation services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Custom web and mobile application development</li>
                  <li>Business process automation and workflow optimization</li>
                  <li>Data analytics and business intelligence solutions</li>
                  <li>Cloud infrastructure and DevOps services</li>
                  <li>Digital strategy consulting and implementation</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All services are provided subject to project agreements and statements of work executed between Munuve Tech and the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When engaging with Munuve Tech services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Notify us immediately of any unauthorized access or security breaches</li>
                  <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">4. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Munuve Tech Property:</strong> Unless otherwise stated in a written agreement, Munuve Tech retains all intellectual property rights to our methodologies, frameworks, tools, and pre-existing code libraries.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Client Property:</strong> Upon full payment, clients receive ownership rights to custom-developed deliverables as specified in the project agreement. This includes source code, designs, and documentation created specifically for the client project.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Third-Party Components:</strong> Any third-party software, libraries, or services integrated into client projects remain subject to their respective licenses and terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are established in individual project agreements. Standard terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Initial deposit required before project commencement (typically 30-50%)</li>
                  <li>Milestone-based payments for larger projects</li>
                  <li>Final payment due upon project completion and delivery</li>
                  <li>Late payment fees may apply for overdue invoices (as specified in agreements)</li>
                  <li>All fees are non-refundable except as required by law or specified in writing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">6. Project Timelines and Deliverables</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Project timelines are estimates based on information available at project inception. Actual delivery dates may vary due to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Changes in project scope or requirements</li>
                  <li>Delays in client feedback or resource availability</li>
                  <li>Discovery of unforeseen technical complexities</li>
                  <li>Third-party dependencies or integration challenges</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Munuve Tech will make reasonable efforts to communicate any timeline changes promptly and work collaboratively to minimize delays.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Munuve Tech agrees to maintain confidentiality of all proprietary client information shared during the course of service delivery. We will not disclose client data, business processes, or strategic information to third parties without explicit written consent, except as required by law or necessary for service delivery with appropriate confidentiality agreements in place.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">8. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Service Warranty:</strong> Munuve Tech warrants that services will be performed with professional care and skill consistent with industry standards. We will correct any material defects in deliverables reported within the warranty period specified in the project agreement (typically 30-90 days).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Disclaimer:</strong> Except as expressly provided in project agreements, our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific business outcomes or results from implementation of our solutions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Munuve Tech's total liability for any claims arising from our services shall not exceed the total fees paid by the client for the specific project giving rise to the claim. We shall not be liable for indirect, incidental, consequential, or punitive damages including but not limited to loss of profits, data, or business opportunities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate a project agreement with written notice as specified in the agreement. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Client is responsible for payment of all work completed to date</li>
                  <li>Munuve Tech will deliver all completed work products</li>
                  <li>Both parties will return or destroy confidential information as appropriate</li>
                  <li>Provisions regarding intellectual property, confidentiality, and liability survive termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Munuve Tech reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms. For active projects, changes will apply to work performed after the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">12. Governing Law and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these Terms or our services shall be resolved through:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation, if negotiation fails</li>
                  <li>Binding arbitration or litigation in Nairobi, Kenya, as a last resort</li>
                </ol>
              </section>

              <section className="border-t border-border pt-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/20 rounded-lg p-6 space-y-2">
                  <p className="text-foreground"><strong>Munuve Tech</strong></p>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                  <p className="text-muted-foreground">Phone: <a href="tel:0745594805" className="text-primary hover:underline">0745 594 805</a></p>
                  <p className="text-muted-foreground">Email: <a href="mailto:joeshady69@gmail.com" className="text-primary hover:underline">joeshady69@gmail.com</a></p>
                </div>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
