import ProductDropdown from "./product-dropdown";
import MobileMenu from "./mobile-menu";

const products = [
  ["01", "Wooden Pallets", "Stringer, block and perimeter-base pallets in standard or custom specifications for shipping and warehousing.", "/products/wooden-pallets"],
  ["02", "Wooden Boxes", "Solid timber and plywood boxes engineered to protect valuable machinery through storage, handling and transit.", "/products/wooden-boxes"],
  ["03", "Wooden Crates", "Ordinary, pinewood, palletized and heavy-duty crates built around your load, movement and destination.", "/products/wooden-crates"],
  ["04", "Wooden Cases", "Closed, high-strength cases designed for maximum safety during export and interstate movement.", "/products/wooden-cases"],
];
const services = [
  ["Lashing & Stuffing", "Professional cargo securing and container stuffing that improves load stability and reduces transit damage."],
  ["Palletization", "Systematic palletizing for safer handling, efficient storage, forklift access and container loading."],
  ["HDPE Tarpaulin Cover", "Protection against moisture, dust, rain and external damage for domestic and export shipments."],
  ["On-site Packing", "Inspection, packing, lashing and sealing delivered at your location by our experienced team."],
];
const boxTypes = ["Domestic Jungle Wooden Box", "Export Jungle Wooden Box", "Export Pine Wooden Box", "Hard Wood Packing Box", "Local Wooden Crate", "Pine Wood Box", "Plywood Bolting Box", "Export Wooden Crate", "Heavy Duty Export Box", "Wooden Saddle"];
const materials = ["Air bubble sheet roll", "Corrugated box", "Corrugated corner", "Corrugated paper roll", "Lashing belt", "Stretch film roll", "Silica gel", "MS stripping roll"];
const regions = ["Ankleshwar", "Bharuch", "Dahej", "Jhagadia", "Surat", "Vapi", "Vadodara", "Anand", "Ahmedabad", "Kutch"];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bhagyalaxmi Timber Mart home"><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /></a>
      <nav aria-label="Primary navigation"><a href="/about">About</a><ProductDropdown /><a href="#services">Services</a><a href="/contact">Contact</a></nav>
      <a className="header-cta" href="tel:+919033933063">Talk to us <span>↗</span></a>
      <MobileMenu />
    </header>

    <section id="top" className="hero">
      <img className="hero-image" src="/hero-workshop.jpg" alt="Craftsman assembling wooden export packaging in a timber workshop" />
      <div className="hero-shade" /><div className="hero-content">
        <p className="eyebrow light"><span /> Since 1990 · Ankleshwar</p>
        <h1>Packaging strength.<br /><em>Delivered in wood.</em></h1>
        <p className="hero-copy">Complete wooden packaging solutions for export and domestic use—made around your cargo, built for the journey ahead.</p>
        <div className="hero-actions"><a className="button orange" href="#products">Explore products <span>↗</span></a><a className="text-link" href="#contact">Request a packing consultation</a></div>
      </div>
      <div className="hero-stat"><strong>35+</strong><span>Years of trusted<br />craftsmanship</span></div><div className="scroll-mark">Scroll to discover <span>↓</span></div>
    </section>

    <section id="about" className="section about-section">
      <div><p className="eyebrow"><span /> About BTM</p><h2>Built on experience.<br />Trusted across industries.</h2></div>
      <div className="about-copy"><p>Incepted in 1990, Shree Bhagyalaxmi Timber Mart has established itself as a prominent and trusted name in timber and wooden packaging. Decades of consistent growth have shaped our reputation for quality products, reliable service and ethical business practices.</p><p>Our deep industry knowledge, skilled workforce and customer-focused approach help us deliver wooden boxes, crates, cases, plywood boxes and corrugated packaging solutions with confidence.</p><div className="leadership"><span>Led by</span><strong>Mr. Suraj Patel</strong><strong>Mr. Jay Patel</strong></div></div>
    </section>

    <section className="industries-band"><p>Serving industries</p><div><span>Pharmaceutical</span><span>Engineering</span><span>Machinery & Equipment</span><span>Chemical</span><span>Export</span></div></section>

    <section id="products" className="section products-section">
      <div className="section-heading"><p className="eyebrow"><span /> What we build</p><h2>Purpose-built packaging.<br />Industrial-grade protection.</h2><p>From warehouse-ready pallets to fully enclosed export cases, every solution is available in standard and customized specifications.</p></div>
      <div className="product-stage"><img src="/product-range.jpg" alt="Wooden pallets, plywood box and heavy-duty export crate arranged in a warehouse" /><div className="image-label">Custom-built for your cargo</div></div>
      <div className="product-grid">{products.map(([n,t,x,href]) => <article key={t}><span>{n}</span><h3>{t}</h3><p>{x}</p><a href={href}>Explore product ↗</a></article>)}</div>
    </section>

    <section className="dark-section"><div className="dark-intro"><p className="eyebrow light"><span /> Built your way</p><h2>Every load is different.<br /><em>So is every box.</em></h2><p>We select the right construction—from economical local wood to export-friendly pine and high-strength plywood—based on weight, handling, environment and destination.</p></div><div className="type-list">{boxTypes.map((t,i)=><div key={t}><span>{String(i+1).padStart(2,"0")}</span><strong>{t}</strong></div>)}</div></section>

    <section id="services" className="services-section"><div className="services-image"><img src="/onsite-services.jpg" alt="Professional container stuffing and lashing of industrial cargo" /><div><strong>End-to-end support</strong><span>From inspection to sealing</span></div></div><div className="services-content"><p className="eyebrow"><span /> Our services</p><h2>Safe at source.<br />Secure in transit.</h2><div className="service-list">{services.map(([t,x],i)=><article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{x}</p></div></article>)}</div></div></section>

    <section className="materials-section"><div><p className="eyebrow"><span /> Complete the pack</p><h2>Quality packing materials,<br />all under one roof.</h2></div><div className="material-list">{materials.map(m=><span key={m}>{m}</span>)}</div></section>

    <section className="reach-section"><div><p className="eyebrow light"><span /> Our reach</p><h2>From Gujarat.<br />Trusted far beyond.</h2><p>Our customer-first approach has helped us build long-term relationships with industrial, commercial and export-oriented clients across the region and around the globe.</p></div><div className="region-cloud">{regions.map((r,i)=><span className={i%3===0?"accent":""} key={r}>{r}</span>)}</div></section>

    <footer id="contact"><div className="footer-top"><div><p className="eyebrow light"><span /> Start a conversation</p><h2>Need packaging that<br /><em>fits the job?</em></h2></div><a className="round-cta" href="tel:+919033933063">Call now <span>↗</span></a></div><div className="contact-grid"><div><span>Phone</span><a href="tel:+919033933063">+91 90339 33063</a><a href="tel:+919898727522">+91 98987 27522</a></div><div><span>Email</span><a href="mailto:btm_7508@yahoo.co.in">btm_7508@yahoo.co.in</a><a href="mailto:btm.7508@gmail.com">btm.7508@gmail.com</a></div><div><span>Visit</span><p>Plot No. 7508, Karmatur Cross Road,<br />GIDC Estate, Ankleshwar – 393002</p></div></div><div className="footer-bottom"><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /><p>Complete wooden packaging solutions<br />for export & domestic use.</p><span>© 2026 Bhagyalaxmi Timber Mart</span></div></footer>
  </main>;
}
