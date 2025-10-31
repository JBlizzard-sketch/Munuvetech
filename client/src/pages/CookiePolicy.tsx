import { useEffect } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function CookiePolicy() {
  useEffect(() => {
    document.title = 'Cookie Policy | Munuve Tech';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-cookies">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: October 30, 2025
            </p>
          </AnimatedSection>

          <AnimatedSection className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners about how visitors use their sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">2. How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Munuve Tech uses cookies to enhance your browsing experience and improve our website functionality. We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Essential website functionality and navigation</li>
                  <li>Remembering your preferences and settings</li>
                  <li>Understanding how visitors interact with our website</li>
                  <li>Improving website performance and user experience</li>
                  <li>Delivering relevant content and communications</li>
                  <li>Measuring the effectiveness of our marketing campaigns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">3. Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div className="bg-muted/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Purpose:</strong> These cookies are strictly necessary for the website to function properly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Session management and authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and server routing</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      <strong>Can be disabled:</strong> No - these cookies are essential for the website to work correctly.
                    </p>
                  </div>

                  <div className="bg-muted/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">3.2 Performance and Analytics Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Purpose:</strong> These cookies help us understand how visitors use our website so we can improve it.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Page views and navigation patterns</li>
                      <li>Time spent on pages</li>
                      <li>Error messages and technical issues</li>
                      <li>Traffic sources and referrals</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      <strong>Third-party services:</strong> Google Analytics (anonymized)
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-2">
                      <strong>Can be disabled:</strong> Yes - through cookie preferences or browser settings.
                    </p>
                  </div>

                  <div className="bg-muted/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">3.3 Functionality Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Purpose:</strong> These cookies enable enhanced functionality and personalization.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Language preferences</li>
                      <li>Theme settings (dark/light mode)</li>
                      <li>Form auto-fill data</li>
                      <li>Video player settings</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      <strong>Can be disabled:</strong> Yes - but some features may not work correctly.
                    </p>
                  </div>

                  <div className="bg-muted/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">3.4 Marketing and Targeting Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Purpose:</strong> These cookies track your browsing activity to deliver relevant advertisements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Retargeting ads on third-party websites</li>
                      <li>Social media integration (LinkedIn, Twitter)</li>
                      <li>Email campaign tracking</li>
                      <li>Conversion tracking</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      <strong>Third-party services:</strong> May include LinkedIn Insight Tag, Google Ads, Facebook Pixel
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-2">
                      <strong>Can be disabled:</strong> Yes - through cookie preferences or browser settings.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that set cookies on your device. These services have their own privacy policies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Google Analytics:</strong> Web analytics service - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a></li>
                  <li><strong>LinkedIn:</strong> Professional networking and marketing - <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a></li>
                  <li><strong>Twitter/X:</strong> Social media integration - <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacy Policy</a></li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not control these third-party cookies and recommend reviewing their privacy policies for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">5. Cookie Duration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies may be either session cookies or persistent cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-24 months) or until you delete them</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">6. How to Manage Cookies</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. Common browsers provide the following cookie management options:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Microsoft Edge:</strong> Settings → Privacy, search and services → Cookies and site permissions</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Opt-Out Tools</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can opt out of certain cookies using these tools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Google Analytics Opt-Out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Browser Add-on</a></li>
                  <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opt-Out Tool</a></li>
                  <li><strong>Digital Advertising Alliance:</strong> <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opt-Out Tool</a></li>
                </ul>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 mt-6">
                  <p className="text-foreground font-semibold mb-2">⚠️ Important Note</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Blocking or deleting cookies may impact your ability to use certain features of our website. Essential cookies cannot be disabled as they are required for basic site functionality.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">7. Mobile Device Settings</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mobile devices also allow you to manage cookies and tracking:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>iOS:</strong> Settings → Safari → Privacy & Security</li>
                  <li><strong>Android:</strong> Settings → Google → Ads → Reset advertising ID</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">8. Do Not Track (DNT)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. Our website does not currently respond to DNT signals, but we respect your privacy choices and provide cookie management options as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">9. Updates to This Cookie Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our cookie practices or for legal and regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="border-t border-border pt-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
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
