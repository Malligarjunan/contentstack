import React from "react";

function App() {
  const year = new Date().getFullYear();

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo-wrap">
            <div className="logo-mark" />
            <div className="logo-text">Contentstack</div>
          </div>
          <nav className="nav">
            <button className="nav-item" type="button">
              Platform
              <span className="nav-pill">New</span>
            </button>
            <button className="nav-item" type="button">
              Solutions
            </button>
            <button className="nav-item" type="button">
              Resources
            </button>
            <button className="nav-item" type="button">
              Plans
            </button>
            <button className="nav-item" type="button">
              Company
            </button>
          </nav>
          <div className="header-cta">
            <a href="#resources" className="header-link">
              Docs
            </a>
            <a href="#contact" className="header-link">
              Login
            </a>
            <a href="#cta-final" className="btn btn-ghost-small">
              Talk to us
            </a>
            <a href="#cta-final" className="btn btn-primary-small">
              Start free
            </a>
          </div>
          <button className="nav-toggle" aria-label="Toggle navigation" type="button">
            ☰
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="section hero" id="top">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">
                Composable CMS &amp; Digital Experience Platform
              </div>
              <h1>Exceptional digital experiences start here.</h1>
              <p className="hero-subtitle">
                Contentstack brings together headless CMS, real-time insights,
                personalization, and automation so your teams can build and ship experiences
                faster than ever.
              </p>
              <div className="hero-ctas">
                <a href="#cta-final" className="btn btn-primary">
                  Talk to us
                </a>
                <a href="#platform" className="btn btn-ghost hero-secondary">
                  Explore the platform
                </a>
              </div>
              <p className="hero-meta">
                Built for global brands that need speed, personalization, and scale.
              </p>
              <div className="hero-badge-row">
                <span className="hero-badge-pill">Headless CMS</span>
                <span className="hero-badge-pill">Real-time data</span>
                <span className="hero-badge-pill">Personalization</span>
                <span className="hero-badge-pill">Agents &amp; automation</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit">
                <div className="hero-orbit-core">Contentstack</div>
                <div className="hero-orbit-ring hero-orbit-ring-1">
                  <span className="orbit-pill">Content</span>
                  <span className="orbit-pill">Assets</span>
                </div>
                <div className="hero-orbit-ring hero-orbit-ring-2">
                  <span className="orbit-pill">Web</span>
                  <span className="orbit-pill">Mobile</span>
                  <span className="orbit-pill">In-store</span>
                </div>
                <div className="hero-orbit-ring hero-orbit-ring-3">
                  <span className="orbit-pill orbit-pill-accent">
                    Personalization
                  </span>
                </div>
              </div>

              <div className="hero-stats">
                <div className="hero-stat-card">
                  <div className="hero-stat-icon">⚡</div>
                  <div>
                    <div className="hero-stat-label">Time-to-market</div>
                    <div className="hero-stat-value">2–3x faster</div>
                  </div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-icon">🌎</div>
                  <div>
                    <div className="hero-stat-label">Channels</div>
                    <div className="hero-stat-value">Omnichannel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero-logos">
            <p>Trusted by leading digital brands</p>
            <div className="hero-logo-row">
              <span className="logo-pill">Brand 1</span>
              <span className="logo-pill">Brand 2</span>
              <span className="logo-pill">Brand 3</span>
              <span className="logo-pill">Brand 4</span>
              <span className="logo-pill">Brand 5</span>
            </div>
          </div>
        </section>

        {/* Why Contentstack */}
        <section className="section section-alt section-why" id="why">
          <div className="container">
            <div className="section-header section-header-center">
              <h2>Why digital leaders choose Contentstack</h2>
              <p>
                Bring content, data, and automation together in one platform so your teams
                can design, launch, and optimize experiences that keep pace with your
                customers.
              </p>
            </div>

            <div className="benefits-grid benefits-grid-why">
              <article className="card benefit-card">
                <div className="benefit-icon">1</div>
                <h3>Composable architecture</h3>
                <p>
                  Replace monolithic systems with a modular, future-ready stack that lets
                  you plug in the tools you want and evolve without replatforming.
                </p>
              </article>

              <article className="card benefit-card">
                <div className="benefit-icon">2</div>
                <h3>Unified content operations</h3>
                <p>
                  Model, author, approve, and publish from one place with workflows, roles,
                  and guardrails designed for complex organizations.
                </p>
              </article>

              <article className="card benefit-card">
                <div className="benefit-icon">3</div>
                <h3>AI &amp; agents built in</h3>
                <p>
                  Use AI to generate content, trigger workflows, and power intelligent
                  agents that accelerate work across your teams.
                </p>
              </article>

              <article className="card benefit-card">
                <div className="benefit-icon">4</div>
                <h3>Enterprise-grade trust</h3>
                <p>
                  Depend on strong security, global performance, and resilience for the
                  digital experiences your business runs on.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="section" id="platform">
          <div className="container">
            <div className="section-header">
              <h2>The Contentstack platform at a glance</h2>
              <p className="section-intro">
                Everything you need to create, manage, and deliver modern digital
                experiences — from content and data to personalization and hosting.
              </p>
            </div>
            <div className="feature-grid">
              <article className="card feature-card">
                <div className="feature-icon feature-icon-purple">📦</div>
                <h3>Headless content</h3>
                <p>
                  Structured content modeling and flexible APIs let you reuse content
                  across brands, regions, and channels.
                </p>
              </article>
              <article className="card feature-card">
                <div className="feature-icon feature-icon-blue">🤝</div>
                <h3>Workflows &amp; collaboration</h3>
                <p>
                  Bring teams together with approvals, roles, and version history so you
                  can ship quickly without sacrificing control.
                </p>
              </article>
              <article className="card feature-card">
                <div className="feature-icon feature-icon-green">🌐</div>
                <h3>Real-time data &amp; insights</h3>
                <p>
                  Connect first-party data and see how customers engage with experiences in
                  real time.
                </p>
              </article>
              <article className="card feature-card">
                <div className="feature-icon feature-icon-pink">🎯</div>
                <h3>Omnichannel personalization</h3>
                <p>
                  Deliver tailored experiences that adapt based on context, behavior, and
                  preferences.
                </p>
              </article>
              <article className="card feature-card">
                <div className="feature-icon feature-icon-yellow">⚙️</div>
                <h3>Agents &amp; automation</h3>
                <p>
                  Use intelligent agents and automation to remove manual bottlenecks from
                  your content lifecycle.
                </p>
              </article>
              <article className="card feature-card">
                <div className="feature-icon feature-icon-navy">🚀</div>
                <h3>Front-end hosting</h3>
                <p>
                  Host experiences closer to your customers with integrated, modern hosting
                  that’s tuned for composable DX.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* AI & Automation */}
        <section className="section section-alt" id="ai">
          <div className="container two-col ai-section">
            <div>
              <div className="section-eyebrow">AI &amp; automation</div>
              <h2>AI that accelerates content and operations</h2>
              <p>
                Contentstack AI helps your teams create, review, and launch better content
                in less time — with intelligent workflows that keep everything on-brand.
              </p>
              <ul className="list">
                <li>
                  Generate content variations, summaries, SEO metadata, and translations.
                </li>
                <li>Use AI to help validate tone, terminology, and compliance.</li>
                <li>
                  Trigger workflows, notifications, and publishing through automation.
                </li>
                <li>Feed performance data back into your content strategy.</li>
              </ul>
              <p>
                <strong>
                  From ideas to live experiences, AI sits in the flow of work.
                </strong>
              </p>
            </div>
            <div className="card ai-flow-card">
              <h3>Example AI-powered workflow</h3>
              <div className="ai-step">
                <div className="ai-step-badge">01</div>
                <div>
                  <div className="ai-step-title">Author drafts content</div>
                  <div className="ai-step-text">
                    Create once in a structured, reusable format.
                  </div>
                </div>
              </div>
              <div className="ai-step">
                <div className="ai-step-badge">02</div>
                <div>
                  <div className="ai-step-title">AI suggests and improves</div>
                  <div className="ai-step-text">
                    Get suggestions for copy, SEO, and localization before review.
                  </div>
                </div>
              </div>
              <div className="ai-step">
                <div className="ai-step-badge">03</div>
                <div>
                  <div className="ai-step-title">Approvals &amp; governance</div>
                  <div className="ai-step-text">
                    Route to legal, brand, or regional owners with clear workflows.
                  </div>
                </div>
              </div>
              <div className="ai-step">
                <div className="ai-step-badge">04</div>
                <div>
                  <div className="ai-step-title">Publish everywhere</div>
                  <div className="ai-step-text">
                    Automatically deploy to web, app, and in-store experiences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Omnichannel */}
        <section className="section" id="omnichannel">
          <div className="container">
            <div className="section-header section-header-center">
              <h2>One platform for every digital touchpoint</h2>
              <p className="section-intro">
                Use one content and data engine to power consistent, connected experiences
                — wherever your customers are.
              </p>
            </div>
            <div className="chip-grid chip-grid-large">
              <span className="chip">Websites</span>
              <span className="chip">Mobile apps</span>
              <span className="chip">In-store screens</span>
              <span className="chip">Kiosks</span>
              <span className="chip">Email &amp; lifecycle</span>
              <span className="chip">Chat &amp; bots</span>
              <span className="chip">IoT</span>
              <span className="chip">VR/AR</span>
              <span className="chip">Portals &amp; knowledge bases</span>
            </div>
          </div>
        </section>

        {/* Value Props (secondary) */}
        <section className="section section-alt section-why" id="ValueProps">
          <div className="container">
            <div className="benefits-grid benefits-grid-why">
              <article className="card benefit-card">
                <div className="benefit-icon">1</div>
                <h3>Composable by design</h3>
                <p>API-first, cloud-native, and built for MACH architectures.</p>
              </article>
              <article className="card benefit-card">
                <div className="benefit-icon">2</div>
                <h3>Real-time experiences</h3>
                <p>Use data and automation to adapt in the moment.</p>
              </article>
              <article className="card benefit-card">
                <div className="benefit-icon">3</div>
                <h3>Enterprise-ready</h3>
                <p>Governance, security, and reliability at global scale.</p>
              </article>
              <article className="card benefit-card">
                <div className="benefit-icon">4</div>
                <h3>Teams in sync</h3>
                <p>Built for developers, marketers, and digital leaders.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="section section-alt" id="integrations">
          <div className="container two-col">
            <div>
              <div className="section-eyebrow">Integrations &amp; marketplace</div>
              <h2>Fits into your stack — and future proofs it</h2>
              <p>
                Connect Contentstack to the tools you already use for commerce, data,
                search, analytics, and personalization — or extend the platform with your
                own apps.
              </p>
              <ul className="list">
                <li>Prebuilt connectors for popular DX, commerce, and data tools.</li>
                <li>APIs, SDKs, and webhooks for custom integrations.</li>
                <li>MACH-friendly, so you can swap services as you grow.</li>
              </ul>
              <a href="#resources" className="btn btn-ghost">
                Explore marketplace-style integrations
              </a>
            </div>
            <div className="logo-grid card">
              <span className="logo-pill">Commerce</span>
              <span className="logo-pill">DAM</span>
              <span className="logo-pill">Search</span>
              <span className="logo-pill">Analytics</span>
              <span className="logo-pill">CDP</span>
              <span className="logo-pill">Marketing automation</span>
            </div>
          </div>
        </section>

        {/* Built for Teams */}
        <section className="section" id="teams">
          <div className="container">
            <div className="section-header section-header-center">
              <h2>A platform every team can get behind</h2>
            </div>
            <div className="feature-grid">
              <article className="card persona-card">
                <div className="persona-icon">👩‍💻</div>
                <h3>Developers &amp; IT</h3>
                <p>
                  Modern APIs, SDKs, and tooling that fit how your teams already build —
                  without vendor lock-in.
                </p>
              </article>
              <article className="card persona-card">
                <div className="persona-icon">📣</div>
                <h3>Marketers &amp; content teams</h3>
                <p>
                  Visual editing, scheduling, localization, and collaboration — with fewer
                  requests to engineering.
                </p>
              </article>
              <article className="card persona-card">
                <div className="persona-icon">📊</div>
                <h3>Digital &amp; product leaders</h3>
                <p>
                  Faster releases, better experimentation, and a clearer view into the
                  impact of digital experiences.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="section section-alt" id="security">
          <div className="container two-col">
            <div>
              <div className="section-eyebrow">Security &amp; reliability</div>
              <h2>Enterprise-grade trust, built in</h2>
              <p>
                Contentstack is designed to support mission-critical digital experiences
                with the security, compliance, and performance global brands expect.
              </p>
              <ul className="list">
                <li>SOC 2 &amp; GDPR aligned practices.</li>
                <li>Role-based access, SSO, MFA, and audit logs.</li>
                <li>Global CDN and edge delivery for performance.</li>
                <li>High availability and resilience.</li>
              </ul>
            </div>
            <div className="card security-card">
              <div className="security-lock">🔒</div>
              <h3>Security as a first-class feature</h3>
              <p>
                Governance and control are part of the platform, not an afterthought — so
                you can move fast with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Customers & Case Studies */}
        <section className="section" id="customers">
          <div className="container">
            <div className="section-header">
              <h2>Powering brand breakthroughs</h2>
              <p className="section-intro">
                From retail and travel to technology and media, Contentstack helps teams
                launch digital experiences that drive growth.
              </p>
            </div>
            <div className="logo-row hero-logo-row">
              <span className="logo-pill">Retail</span>
              <span className="logo-pill">Travel</span>
              <span className="logo-pill">Financial services</span>
              <span className="logo-pill">Technology</span>
              <span className="logo-pill">Media</span>
            </div>
            <div className="feature-grid">
              <article className="card stat-card">
                <h3>50% faster time-to-market</h3>
                <p>
                  Launch new campaigns and experiences in half the time by centralizing
                  content and automating workflows.
                </p>
              </article>
              <article className="card stat-card">
                <h3>2–3x more releases</h3>
                <p>
                  Empower teams to ship more frequently with less reliance on developers
                  for day-to-day changes.
                </p>
              </article>
              <article className="card stat-card">
                <h3>Lower total cost of ownership</h3>
                <p>
                  Reduce the complexity and cost of maintaining legacy, monolithic
                  platforms.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section section-alt" id="testimonials">
          <div className="container">
            <div className="section-header section-header-center">
              <h2>What customers are saying</h2>
            </div>
            <div className="testimonial-grid">
              <article className="card testimonial">
                <p>
                  “Contentstack helped us move from static releases to a modern, composable
                  approach. Our teams now experiment more and deliver faster, without
                  losing control.”
                </p>
                <p className="testimonial-meta">
                  VP Digital Experience, Global Retail Brand
                </p>
              </article>
              <article className="card testimonial">
                <p>
                  “Having content, data, and personalization in one platform has changed
                  the way we think about digital journeys.”
                </p>
                <p className="testimonial-meta">
                  CTO, Travel &amp; Hospitality Company
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section" id="use-cases">
          <div className="container">
            <div className="section-header section-header-center">
              <h2>Built for the way you work</h2>
            </div>
            <div className="chip-grid">
              <span className="chip">
                Enterprise websites &amp; portals
              </span>
              <span className="chip">Mobile app content</span>
              <span className="chip">E-commerce experiences</span>
              <span className="chip">Global localization</span>
              <span className="chip">Multi-brand management</span>
              <span className="chip">Microsites &amp; campaigns</span>
              <span className="chip">Knowledge bases</span>
              <span className="chip">Internal tools &amp; portals</span>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="section section-alt" id="architecture">
          <div className="container two-col">
            <div>
              <div className="section-eyebrow">Architecture</div>
              <h2>Composable today, ready for whatever comes next</h2>
              <p>
                Contentstack’s architecture lets you assemble the right combination of
                tools and services while keeping content at the center of your experience
                stack.
              </p>
              <ul className="list">
                <li>Connect and orchestrate multiple front-ends and channels.</li>
                <li>Swap out services without disrupting your content model.</li>
                <li>Scale to new regions, brands, and platforms with confidence.</li>
              </ul>
            </div>
            <div className="card architecture-card">
              <p className="architecture-diagram-label">High-level flow</p>
              <p className="architecture-diagram">
                Content &amp; data → Experience APIs → Personalization &amp; agents →
                Channels &amp; front-ends
              </p>
            </div>
          </div>
        </section>

        {/* Product Demo */}
        <section className="section" id="demo">
          <div className="container two-col">
            <div>
              <h2>See Contentstack in action</h2>
              <p>
                Watch how teams model content, collaborate, use AI, and publish experiences
                across channels — all from one platform.
              </p>
              <a href="#cta-final" className="btn btn-ghost">
                Request a live demo
              </a>
            </div>
            <div className="card video-placeholder">
              <p>Embed product demo video here.</p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="section section-alt" id="resources">
          <div className="container">
            <div className="section-header">
              <h2>Everything you need to get started</h2>
            </div>
            <div className="feature-grid">
              <article className="card">
                <h3>Developer docs</h3>
                <p>
                  API reference, SDKs, and implementation guides for engineering teams.
                </p>
              </article>
              <article className="card">
                <h3>Guides &amp; webinars</h3>
                <p>
                  Best practices and deep dives into composable architecture and DX.
                </p>
              </article>
              <article className="card">
                <h3>Customer stories</h3>
                <p>
                  See how brands use Contentstack to transform their digital experiences.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Comparative */}
        <section className="section" id="compare">
          <div className="container">
            <div className="section-header section-header-center">
              <h2>How Contentstack compares</h2>
              <p className="section-intro">
                Move beyond the limits of traditional CMS and basic headless tools with a
                composable platform built for modern digital teams.
              </p>
            </div>
            <div className="compare-table">
              <div className="compare-row compare-header">
                <div />
                <div>Contentstack</div>
                <div>Legacy CMS</div>
                <div>Basic headless</div>
              </div>
              <div className="compare-row">
                <div>Composable architecture</div>
                <div>✓</div>
                <div>✕</div>
                <div>△</div>
              </div>
              <div className="compare-row">
                <div>Built-in governance</div>
                <div>✓</div>
                <div>✓</div>
                <div>△</div>
              </div>
              <div className="compare-row">
                <div>AI &amp; automation</div>
                <div>✓</div>
                <div>✕</div>
                <div>✕</div>
              </div>
              <div className="compare-row">
                <div>Omnichannel personalization</div>
                <div>✓</div>
                <div>✕</div>
                <div>△</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="section section-alt" id="pricing">
          <div className="container two-col">
            <div>
              <h2>Flexible plans for growing teams</h2>
              <p>
                Whether you’re starting small or running a global digital operation, we’ll
                help you shape a plan that matches your needs.
              </p>
            </div>
            <div className="card">
              <p>
                Work with us to choose the right mix of environments, users, and
                capabilities for your organization.
              </p>
              <a href="#cta-final" className="btn btn-primary">
                Talk to sales
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-cta-final" id="cta-final">
          <div className="container cta-final-inner">
            <h2>Ready to reimagine what’s possible?</h2>
            <p>
              Discover how Contentstack can help your teams design, launch, and scale
              digital experiences that your customers will love.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">
                Talk to us
              </a>
              <a href="#contact" className="btn btn-ghost">
                Start free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer" id="contact">
        <div className="container footer-inner">
          <div className="footer-col">
            <h4>Platform</h4>
            <a href="#platform">Overview</a>
            <a href="#ai">AI &amp; automation</a>
            <a href="#integrations">Integrations</a>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="#use-cases">Use cases</a>
            <a href="#customers">Customers</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#resources">Documentation</a>
            <a href="#resources">Guides</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#contact">Contact</a>
            <a href="#contact">Careers</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {year} Contentstack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
