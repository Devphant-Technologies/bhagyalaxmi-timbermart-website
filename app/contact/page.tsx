import type { Metadata } from "next";
import ContactForm from "./contact-form";
import ProductDropdown from "../product-dropdown";
import MobileMenu from "../mobile-menu";

export const metadata: Metadata = {
  title: "Contact Us | Bhagyalaxmi Timber Mart",
  description: "Contact Bhagyalaxmi Timber Mart in GIDC Ankleshwar for wooden boxes, pallets, crates, export packaging and on-site packing services.",
};

export default function ContactPage() {
  return <main className="contact-page">
    <header className="site-header contact-header"><a className="brand" href="/"><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /></a><nav aria-label="Primary navigation"><a href="/about">About</a><ProductDropdown /><a href="/#services">Services</a><a className="active" href="/contact">Contact</a></nav><a className="header-cta" href="tel:+919033933063">Call now <span>↗</span></a><MobileMenu /></header>

    <section className="contact-hero"><div><p className="eyebrow light"><span /> Get in touch</p><h1>Let’s build protection<br /><em>around your cargo.</em></h1></div><p>Share your packing requirement with us. Our team will help identify the right wooden packaging, material and on-site support for a safer journey.</p></section>

    <section className="contact-details">
      <article><span>01 · Call</span><h2>Speak with our team</h2><a href="tel:+919033933063">+91 90339 33063</a><a href="tel:+919898727522">+91 98987 27522</a><p>For product enquiries, site packing and urgent requirements.</p></article>
      <article><span>02 · Write</span><h2>Send an email</h2><a href="mailto:btm_7508@yahoo.co.in">btm_7508@yahoo.co.in</a><a href="mailto:btm.7508@gmail.com">btm.7508@gmail.com</a><p>Share drawings, dimensions or packing specifications by email.</p></article>
      <article><span>03 · Visit</span><h2>Find our facility</h2><p className="address">Plot No. 7508, Karmatur Cross Road,<br />GIDC Estate, Ankleshwar – 393002</p><a className="direction-link" href="https://www.google.com/maps/search/?api=1&query=Plot+No+7508+Karmatur+Cross+Road+GIDC+Estate+Ankleshwar+393002" target="_blank" rel="noreferrer">Open directions ↗</a></article>
    </section>

    <section className="inquiry-section"><div className="inquiry-intro"><p className="eyebrow"><span /> Request a quote</p><h2>Tell us what<br />needs protecting.</h2><p>A few useful details—cargo dimensions, weight, quantity, destination and timeline—help us respond with a more relevant recommendation.</p><div className="response-note"><strong>Industrial packaging specialists</strong><span>Wooden boxes · crates · pallets · cases · on-site packing</span></div></div><ContactForm /></section>

    <section className="map-section"><div className="map-copy"><p className="eyebrow light"><span /> Ankleshwar, Gujarat</p><h2>At the heart of<br />the industrial belt.</h2><p>Conveniently located in GIDC Estate, serving clients across Ankleshwar, Bharuch, Dahej, Jhagadia and throughout Gujarat.</p></div><div className="map-frame"><iframe title="Bhagyalaxmi Timber Mart location in Ankleshwar" src="https://www.google.com/maps?q=Plot%20No.%207508%2C%20Karmatur%20Cross%20Road%2C%20GIDC%20Estate%2C%20Ankleshwar%20393002&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

    <footer className="contact-footer"><div><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /><p>Complete wooden packaging solutions<br />for export & domestic use.</p></div><a href="/">Back to home <span>↗</span></a><span>© 2026 Bhagyalaxmi Timber Mart</span></footer>
  </main>;
}
