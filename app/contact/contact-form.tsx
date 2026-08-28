"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [error, setError] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const requirement = String(data.get("requirement") || "").trim();
    if (!name || !phone || !requirement) { setError("Please add your name, phone number and packaging requirement."); return; }
    setError("");
    const subject = encodeURIComponent(`Packaging enquiry from ${name}${company ? ` — ${company}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company || "—"}\nPhone: ${phone}\nEmail: ${email || "—"}\n\nPackaging requirement:\n${requirement}`);
    window.location.href = `mailto:btm.7508@gmail.com?subject=${subject}&body=${body}`;
  }

  return <form className="inquiry-form" onSubmit={submit} noValidate>
    <div className="form-row"><label>Your name *<Input name="name" placeholder="Full name" /></label><label>Company<Input name="company" placeholder="Company name" /></label></div>
    <div className="form-row"><label>Phone number *<Input name="phone" type="tel" placeholder="+91" /></label><label>Work email<Input name="email" type="email" placeholder="name@company.com" /></label></div>
    <label>Tell us about your requirement *<Textarea name="requirement" placeholder="Cargo type, approximate size or weight, quantity, destination and timeline..." rows={6} /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <div className="form-submit"><Button type="submit">Prepare enquiry <span>↗</span></Button><p>This will open your email app with the details ready to send.</p></div>
  </form>;
}
