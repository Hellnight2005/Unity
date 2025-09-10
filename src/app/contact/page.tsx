"use client";

import { useState } from "react";
import { useTheme } from "next-themes"; // Import useTheme to conditionally style
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);
  const { theme } = useTheme();

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

  // Dynamic colors for the submit button
  const submitButtonColors = {
    background: theme === 'dark' ? 'var(--ue-primary)' : 'var(--ue-accent-green)',
    text: 'white',
  };

  return (
    <main className="min-h-screen py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-foreground/80 leading-relaxed mb-8">
            We are always here to help. Whether you have a question or a project in mind,
            feel free to reach out to our team.
          </p>
          <div className="text-foreground/80 space-y-4">
            <p className="flex items-center gap-3">
              <Phone size={20} className="text-[color:var(--ue-primary)]" />
              <strong className="font-semibold">Phone:</strong> +918928691044 / +918623925697
            </p>
            <p className="flex items-center gap-3">
              <Mail size={20} className="text-[color:var(--ue-primary)]" />
              <strong className="font-semibold">Email:</strong> Unityenterprises36@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={20} className="text-[color:var(--ue-primary)]" />
              <strong className="font-semibold">Offices:</strong> Mumbai MMR & MIDC Lote Parshuram (Ratnagiri)
            </p>
          </div>
        </div>

        <form
          action={async (fd) => submit(fd)}
          className="p-8 rounded-xl border border-border space-y-6 bg-card"
        >
          <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
          <input
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-primary)] bg-background text-foreground"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-primary)] bg-background text-foreground"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-primary)] bg-background text-foreground"
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-200 w-full"
            style={{
              backgroundColor: submitButtonColors.background,
              color: submitButtonColors.text
            }}
          >
            {submitting ? "Sending..." : ok ? "Sent ✓" : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}

// NOTE: Uncomment and update the iframe with a valid Google Maps embed URL
/*
<div className="mt-8">
  <iframe
    title="Unity Enterprises Mumbai Office"
    src="YOUR_GOOGLE_MAPS_EMBED_URL"
    className="w-full h-80 rounded-lg border-2 border-border"
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>
*/