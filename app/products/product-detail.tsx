import ProductDropdown from "../product-dropdown";
import MobileMenu from "../mobile-menu";

export type ProductData = {
  code: string; title: string; accent: string; image: string; intro: string;
  overview: string[]; types: { title: string; text: string }[];
  specs: { label: string; value: string }[]; applications: string[];
  benefits: { title: string; text: string }[]; next?: { label: string; href: string };
};

export default function ProductDetail({ product }: { product: ProductData }) {
  return <main className="product-page">
    <header className="site-header"><a className="brand" href="/"><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /></a><nav aria-label="Primary navigation"><a href="/about">About</a><ProductDropdown active /><a href="/#services">Services</a><a href="/contact">Contact</a></nav><a className="header-cta" href="/contact">Get a quote <span>↗</span></a><MobileMenu /></header>
    <section className="product-hero"><img src={product.image} alt={`${product.title} by Bhagyalaxmi Timber Mart`} /><div className="product-hero-shade" /><div className="product-hero-copy"><p className="eyebrow light"><span /> Product {product.code}</p><h1>{product.title}<br /><em>{product.accent}</em></h1><p>{product.intro}</p><a className="button orange" href="/contact">Discuss your requirement <span>↗</span></a></div><div className="product-hero-tag">Standard & custom specifications</div></section>
    <section className="product-overview"><div><p className="eyebrow"><span /> Product overview</p><h2>Designed around<br />the journey.</h2></div><div>{product.overview.map(p=><p key={p}>{p}</p>)}</div></section>
    <section className="product-types"><div className="product-types-heading"><p className="eyebrow light"><span /> Available constructions</p><h2>Choose the build<br />that fits the load.</h2></div><div className="product-type-grid">{product.types.map((type,i)=><article key={type.title}><span>0{i+1}</span><h3>{type.title}</h3><p>{type.text}</p></article>)}</div></section>
    <section className="spec-section"><div className="spec-intro"><p className="eyebrow"><span /> Specification framework</p><h2>Made to requirement,<br />not assumption.</h2><p>Final construction is selected after understanding the cargo, handling method, route and destination. Share these inputs with our team for a suitable recommendation.</p></div><div className="spec-list">{product.specs.map((s,i)=><div key={s.label}><span>{String(i+1).padStart(2,"0")}</span><strong>{s.label}</strong><p>{s.value}</p></div>)}</div></section>
    <section className="application-section"><div><p className="eyebrow"><span /> Suitable applications</p><h2>Built for industrial<br />movement.</h2></div><div className="application-cloud">{product.applications.map((x,i)=><span className={i%3===0?"accent":""} key={x}>{x}</span>)}</div></section>
    <section className="benefit-section"><p className="eyebrow light"><span /> Why this solution</p><div className="benefit-grid">{product.benefits.map((b,i)=><article key={b.title}><span>0{i+1}</span><h3>{b.title}</h3><p>{b.text}</p></article>)}</div></section>
    <section className="product-cta"><div><p className="eyebrow"><span /> Let’s specify it together</p><h2>Share the cargo.<br />We’ll shape the protection.</h2></div><div><p>Send us the dimensions, approximate weight, quantity, destination and handling method. Our team will help identify a suitable construction.</p><a className="button orange" href="/contact">Request a quotation <span>↗</span></a>{product.next&&<a className="next-product" href={product.next.href}>Next: {product.next.label} →</a>}</div></section>
    <footer className="contact-footer"><div><img src="/btm-logo.png" alt="Bhagyalaxmi Timber Mart" /><p>Complete wooden packaging solutions<br />for export & domestic use.</p></div><a href="/#products">All products <span>↗</span></a><span>© 2026 Bhagyalaxmi Timber Mart</span></footer>
  </main>;
}
