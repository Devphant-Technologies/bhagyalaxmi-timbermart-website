import type { Metadata } from "next";
import ProductDropdown from "../product-dropdown";
import MobileMenu from "../mobile-menu";

export const metadata: Metadata = {
  title: "Catalogue | Bhagyalaxmi Timber Mart",
  description: "Browse the Bhagyalaxmi Timber Mart company catalogue for timber, wooden packaging and export solutions.",
};

export default function CataloguePage() {
  return <main className="catalogue-page">
    <header className="site-header"><a className="brand" href="/"><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /></a><nav aria-label="Primary navigation"><a href="/about">About</a><ProductDropdown /><a href="/#services">Services</a><a className="active" href="/catalogue">Catalogue</a><a href="/contact">Contact</a></nav><a className="header-cta" href="/contact">Enquire now <span>↗</span></a><MobileMenu /></header>

    <section className="catalogue-viewer">
      <iframe src="/btm-catalogue.pdf#toolbar=1&navpanes=0&view=FitH" title="Bhagyalaxmi Timber Mart catalogue" />
    </section>

    <footer className="contact-footer"><div><img src="/btm-logo-light.png" alt="Bhagyalaxmi Timber Mart" /><p>Complete wooden packaging solutions<br />for export & domestic use.</p></div><a href="/contact">Contact our team <span>↗</span></a><span>© 2026 Bhagyalaxmi Timber Mart</span><nav className="footer-menu" aria-label="Footer"><a href="/about">About</a><a href="/#services">Services</a><a className="active" href="/catalogue">Catalogue</a><a href="/contact">Contact</a></nav><p className="footer-credit">Designed and developed by <a href="https://www.instagram.com/bigartstudio?utm_source=qr&igsi=bDFhem1yc29leTRn" target="_blank" rel="noreferrer">BigArts Studio</a></p></footer>
  </main>;
}
