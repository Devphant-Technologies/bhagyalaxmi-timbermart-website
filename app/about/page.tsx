import type { Metadata } from "next";
import ProductDropdown from "../product-dropdown";
import MobileMenu from "../mobile-menu";

export const metadata: Metadata = {
  title: "About Us | Bhagyalaxmi Timber Mart",
  description: "Discover Bhagyalaxmi Timber Mart's journey since 1990, leadership, infrastructure and experience in industrial wooden packaging.",
};

const industries = [
  ["01", "Pharmaceutical", "Protective packaging for sensitive equipment, machinery and export consignments."],
  ["02", "Engineering", "Strong, custom-built support for engineered components and industrial assemblies."],
  ["03", "Machinery & Equipment", "Heavy-duty crates, cases and saddles shaped around large or irregular loads."],
  ["04", "Chemical", "Transit-ready wooden packaging supported by lashing, palletization and protective materials."],
  ["05", "Export", "Pinewood and export-oriented packaging designed for handling, loading and long journeys."],
];

const principles = [
  ["Quality first", "Careful material selection and experienced workmanship across boxes, pallets, crates and cases."],
  ["Made to requirement", "Standard and customized specifications aligned with the cargo, application and movement."],
  ["Reliable service", "A customer-focused approach, on-site packing capability and commitment to timely support."],
  ["Ethical business", "Long-standing relationships built through transparent, dependable and responsible practices."],
];

export default function AboutPage() {
  return <main className="about-page">
    <header className="site-header"><a className="brand" href="/"><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /></a><nav aria-label="Primary navigation"><a className="active" href="/about">About</a><ProductDropdown /><a href="/#services">Services</a><a href="/contact">Contact</a></nav><a className="header-cta" href="/contact">Enquire now <span>↗</span></a><MobileMenu /></header>

    <section className="about-hero"><img src="/hero-workshop.jpg" alt="Wooden packaging craftsmanship at Bhagyalaxmi Timber Mart" /><div className="about-hero-shade" /><div className="about-hero-copy"><p className="eyebrow light"><span /> Our story</p><h1>More than timber.<br /><em>A promise of protection.</em></h1><p>For over three decades, we have helped industries move their valuable goods with stronger, smarter and more dependable wooden packaging.</p></div><div className="about-year"><span>Established</span><strong>1990</strong></div></section>

    <section className="story-section"><div className="story-title"><p className="eyebrow"><span /> Bhagyalaxmi Timber Mart</p><h2>Experience shaped<br />by every load.</h2></div><div className="story-copy"><p>Incepted in 1990, Shree Bhagyalaxmi Timber Mart has grown into a prominent and trusted entity in the timber and wooden packaging industry. Consistent growth, quality products, reliable service and ethical business practices have defined our journey in a highly competitive market.</p><p>Over the years, we have served a wide range of industries with wooden boxes, crates, cases, pallets, plywood boxes and corrugated packaging solutions. Our deep industry knowledge helps us understand that good packaging is never merely a container—it is protection engineered around the product.</p><blockquote>“Industrial strength in every box.”</blockquote></div></section>

    <section className="journey-band"><div><span>1990</span><strong>The foundation</strong><p>Bhagyalaxmi Timber Mart begins its journey in timber and wooden packaging.</p></div><div><span>Today</span><strong>A complete packaging partner</strong><p>Products, packing materials, lashing, palletization and on-site packing support.</p></div><div><span>Forward</span><strong>Relationships that last</strong><p>Continuing to serve industrial and export-oriented customers with reliability.</p></div></section>

    <section className="leadership-section"><div className="leadership-photo"><img src="/product-range.jpg" alt="Wooden pallets, plywood cases and export crates" /><div><span>Products built with purpose</span><strong>Standard & custom specifications</strong></div></div><div className="leadership-copy"><p className="eyebrow"><span /> Our leadership</p><h2>Hands-on direction.<br />Customer-first thinking.</h2><p>Under the leadership of Mr. Suraj Patel and Mr. Jay Patel, the company continues to combine practical industry knowledge with close customer interaction. This approach helps the team anticipate requirements, recommend suitable solutions and maintain long-term relationships.</p><div className="leader-names"><article><span>Leadership</span><strong>Mr. Suraj Patel</strong></article><article><span>Leadership</span><strong>Mr. Jay Patel</strong></article></div></div></section>

    <section className="infrastructure-section"><div><p className="eyebrow light"><span /> Infrastructure & workforce</p><h2>Equipped to deliver.<br /><em>Experienced to understand.</em></h2><p>Our well-equipped infrastructural base supports the delivery of consistent, dependable products. Qualified and experienced personnel anticipate customer requirements and translate them into practical packaging solutions built for handling, storage and transportation.</p></div><div className="capability-list"><div><strong>Wooden packaging</strong><span>Boxes · cases · crates · pallets · saddles</span></div><div><strong>Supporting materials</strong><span>Corrugated · bubble sheet · stretch film · silica gel</span></div><div><strong>On-site support</strong><span>Inspection · packing · lashing · stuffing · sealing</span></div><div><strong>Domestic & export</strong><span>Solutions for local, interstate and international movement</span></div></div></section>

    <section className="principles-section"><div className="section-heading"><p className="eyebrow"><span /> What guides us</p><h2>Simple principles.<br />Strong relationships.</h2><p>Our working approach is built around the essentials that matter most in industrial packaging.</p></div><div className="principles-grid">{principles.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="about-industries"><div><p className="eyebrow light"><span /> Industries we understand</p><h2>Packaging for the<br />realities of industry.</h2></div><div>{industries.map(([n,title,text])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="about-reach"><div><p className="eyebrow"><span /> Growing through trust</p><h2>Rooted in Ankleshwar.<br />Serving across Gujarat.</h2></div><div><p>Our customer-interactive approach has helped us serve and retain clients across Ankleshwar, Bharuch, Dahej, Jhagadia, Surat, Vapi, Vadodara, Anand, Ahmedabad and Kutch—as well as customers beyond the region.</p><a className="button orange" href="/contact">Start a conversation <span>↗</span></a></div></section>

    <footer className="contact-footer"><div><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /><p>Complete wooden packaging solutions<br />for export & domestic use.</p></div><a href="/contact">Contact our team <span>↗</span></a><span>© 2026 Bhagyalaxmi Timber Mart</span></footer>
  </main>;
}
