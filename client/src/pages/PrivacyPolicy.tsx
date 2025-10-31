import { useEffect } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Munuve Tech';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-privacy">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: October 30, 2025
            </p>
          </AnimatedSection>

          <AnimatedSection className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Munuve Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity. By using our services, you consent to the data practices described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
                  <li><strong>Project Information:</strong> Requirements, specifications, and business details shared during consultations</li>
                  <li><strong>Communication Records:</strong> Emails, messages, and other correspondence with our team</li>
                  <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors)</li>
                  <li><strong>Feedback and Reviews:</strong> Testimonials, survey responses, and other feedback you provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, click patterns, referring/exit pages</li>
                  <li><strong>Cookies and Tracking:</strong> Session data, preferences, and analytics information (see Cookie Policy)</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our digital transformation services</li>
                  <li><strong>Communication:</strong> To respond to inquiries, provide project updates, and send service-related notifications</li>
                  <li><strong>Business Operations:</strong> To process payments, manage contracts, and maintain business records</li>
                  <li><strong>Analytics and Improvement:</strong> To understand user behavior and optimize our website and services</li>
                  <li><strong>Marketing:</strong> To send newsletters, promotional materials, and relevant updates (with your consent)</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                  <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">4. How We Share Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Service Providers:</strong> With third-party vendors who assist in service delivery (hosting, analytics, payment processing) under strict confidentiality agreements</li>
                  <li><strong>Business Partners:</strong> With technology partners when necessary for project delivery, with your consent</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notification to affected users</li>
                  <li><strong>With Your Consent:</strong> Any other sharing with your explicit permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure access controls and authentication</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection and confidentiality</li>
                  <li>Incident response procedures for potential breaches</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Project-related information is typically retained for 7 years for legal and tax purposes. Website analytics data is retained for 26 months. You may request deletion of your information subject to legal and contractual obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">7. Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                  <li><strong>Objection:</strong> Object to certain processing activities, including marketing</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> To remember your settings and choices</li>
                  <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements (with consent)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can control cookies through your browser settings. For more information, see our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">9. Third-Party Links and Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites or integrate third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">10. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws, including the use of Standard Contractual Clauses where required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">11. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. For significant changes, we may provide additional notice such as email notification. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="border-t border-border pt-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="bg-muted/20 rounded-lg p-6 space-y-2">
                  <p className="text-foreground"><strong>Munuve Tech - Privacy Office</strong></p>
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
