"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const formLabels = {
  name: { label: "Nombre completo", placeholder: "Tu nombre" },
  email: { label: "Correo electrónico", placeholder: "Tu correo" },
  phone: { label: "Teléfono", placeholder: "Tu teléfono" },
  project: { label: "Proyecto", placeholder: "¿Sobre qué proyecto quieres información?" },
  subject: { label: "Asunto", placeholder: "Asunto" },
  message: { label: "Mensaje", placeholder: "Déjanos tu mensaje aquí" },
  privacyPrefix: "Acepto la",
  privacyLink: "política de privacidad",
  privacySuffix: "del sitio",
  send: "Enviar mensaje",
  sending: "Enviando...",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      project: String(formData.get("project") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      privacy: formData.get("privacy") === "on",
    };

    if (!payload.name || !payload.message) {
      setStatus("error");
      setErrorMessage("Nombre y mensaje son obligatorios.");
      return;
    }

    if (!payload.email && !payload.phone) {
      setStatus("error");
      setErrorMessage("Indica un correo o un teléfono de contacto.");
      return;
    }

    if (!payload.privacy) {
      setStatus("error");
      setErrorMessage("Debes aceptar la política de privacidad.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "No pudimos enviar tu mensaje.");
        return;
      }

      trackEvent("contact_form_submit", { method: "form" });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Error de red. Intenta de nuevo o escríbenos por WhatsApp.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row g-4">
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control border-0"
              id="name"
              name="name"
              placeholder={formLabels.name.placeholder}
              required
            />
            <label htmlFor="name">{formLabels.name.label}</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control border-0"
              id="email"
              name="email"
              placeholder={formLabels.email.placeholder}
            />
            <label htmlFor="email">{formLabels.email.label}</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="tel"
              className="form-control border-0"
              id="phone"
              name="phone"
              placeholder={formLabels.phone.placeholder}
            />
            <label htmlFor="phone">{formLabels.phone.label}</label>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control border-0"
              id="project"
              name="project"
              placeholder={formLabels.project.placeholder}
            />
            <label htmlFor="project">{formLabels.project.label}</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control border-0"
              id="subject"
              name="subject"
              placeholder={formLabels.subject.placeholder}
            />
            <label htmlFor="subject">{formLabels.subject.label}</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control border-0"
              placeholder={formLabels.message.placeholder}
              id="message"
              name="message"
              style={{ height: "125px" }}
              required
            />
            <label htmlFor="message">{formLabels.message.label}</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheck"
              name="privacy"
              required
            />
            <label className="form-check-label" htmlFor="flexCheck">
              {formLabels.privacyPrefix}{" "}
              <Link href="/calidad/privacidad" className="link-primary">
                {formLabels.privacyLink}
              </Link>{" "}
              {formLabels.privacySuffix}
            </label>
          </div>
        </div>

        {status === "success" && (
          <div className="col-12">
            <div className="alert alert-success mb-0" role="status">
              Mensaje enviado. Te contactaremos pronto.
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="col-12">
            <div className="alert alert-danger mb-0" role="alert">
              {errorMessage}
            </div>
          </div>
        )}

        <div className="col-12">
          <button
            className="btn btn-primary w-100 py-3"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? formLabels.sending : formLabels.send}
          </button>
        </div>
      </div>
    </form>
  );
}
