"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);

  async function submit(formData: FormData) {
    setSubmitting(true);
    setOk(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      setOk(res.ok);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-bold text-black mb-4">Contact</h1>
          <div className="text-black/80 space-y-2">
            <p><strong className="text-[color:var(--ue-primary)]">Phone:</strong> +918928691044 / +918623925697</p>
            <p><strong className="text-[color:var(--ue-primary)]">Email:</strong> Unityenterprises36@gmail.com</p>
            <p><strong className="text-[color:var(--ue-primary)]">Offices:</strong> Mumbai MMR & MIDC Lote Parshuram (Ratnagiri)</p>
          </div>
          {/* <div className="mt-6">
            <iframe
              title="Mumbai office"
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              className="w-full h-64 border"
              loading="lazy"
            />
          </div> */}
        </div>
        <form action={async (fd) => submit(fd)} className="p-6 rounded-lg border border-black/10 space-y-4 bg-white">
          <input name="name" placeholder="Name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-accent-orange)]" />
          <input name="email" placeholder="Email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-accent-orange)]" />
          <textarea name="message" placeholder="Message" rows={4} className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-accent-orange)]" />
          <button type="submit" disabled={submitting} className="px-5 py-3 rounded-md bg-[color:var(--ue-primary)] text-white">
            {submitting ? "Sending..." : ok ? "Sent ✓" : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}


