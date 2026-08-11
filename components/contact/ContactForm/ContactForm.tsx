"use client";

import { FormEvent, useState } from "react";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{
        type: "success" | "error" | "";
        message: string;
    }>({
        type: "",
        message: "",
    });

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSubmitting(true);

        setStatus({
            type: "",
            message: "",
        });

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
        );

        formData.append(
            "subject",
            "New Enquiry - Lakhdatar Associates India LLP"
        );

        formData.append(
            "from_name",
            "Lakhdatar Associates Website"
        );

        formData.append(
            "replyto",
            formData.get("email")?.toString() || ""
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: formData,
                }
            );

            const result = await response.json();

            if (result.success) {
                setStatus({
                    type: "success",
                    message:
                        "Thank you! Your enquiry has been sent successfully. We will get back to you within 24 hours.",
                });

                form.reset();
            } else {
                setStatus({
                    type: "error",
                    message:
                        result.message ||
                        "Something went wrong. Please try again.",
                });
            }
        } catch {
            setStatus({
                type: "error",
                message:
                    "Unable to send your enquiry right now. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="mx-auto grid max-w-[1350px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.35fr] lg:gap-8">

                {/* =====================================================
                    LEFT SIDE
                ====================================================== */}
                <div className="flex flex-col gap-4">

                    {/* Call Us */}
                    <div className="rounded-lg border border-[#d9aa17] bg-[#f7f8fa] p-5 sm:p-6">
                        <div className="flex items-start gap-5">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#071d38]">
                                <Phone
                                    size={25}
                                    strokeWidth={1.8}
                                    className="text-[#e0b21e]"
                                />
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#071d38] sm:text-lg">
                                    Call Us
                                </h3>

                                <a
                                    href="tel:+919038819066"
                                    className="mt-1 block text-base font-medium text-[#071d38] transition hover:text-[#c89d13] sm:text-lg"
                                >
                                    +91 90388 19066
                                </a>

                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    Mon–Sat, 9 AM – 7 PM
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Email Us */}
                    <div className="rounded-lg border border-slate-200 bg-[#f7f8fa] p-5 sm:p-6">
                        <div className="flex items-start gap-5">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#071d38]">
                                <Mail
                                    size={25}
                                    strokeWidth={1.8}
                                    className="text-[#e0b21e]"
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-base font-bold text-[#071d38] sm:text-lg">
                                    Email Us
                                </h3>

                                <a
                                    href="mailto:sales.lakhdataar@gmail.com"
                                    className="mt-1 block break-all text-sm font-medium text-[#071d38] transition hover:text-[#c89d13] sm:text-base"
                                >
                                    sales.lakhdatar@gmail.com
                                </a>

                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    We reply within 24 hours
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Head Office */}
                    <div className="rounded-lg border border-slate-200 bg-[#f7f8fa] p-5 sm:p-6">
                        <div className="flex items-start gap-5">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#071d38]">
                                <MapPin
                                    size={25}
                                    strokeWidth={1.8}
                                    className="text-[#e0b21e]"
                                />
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#071d38] sm:text-lg">
                                    Head Office
                                </h3>

                                <p className="mt-1 text-sm font-medium leading-6 text-[#071d38] sm:text-base">
                                    Arch Square X2, Suite 601 & 602
                                </p>

                                <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                                    EP & Y1, Sector V, Salt Lake City,
                                    Kolkata – 700091
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="rounded-lg border border-slate-200 bg-[#f7f8fa] p-5 sm:p-6">
                        <div className="flex items-start gap-5">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#071d38]">
                                <Clock3
                                    size={25}
                                    strokeWidth={1.8}
                                    className="text-[#e0b21e]"
                                />
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-[#071d38] sm:text-lg">
                                    Working Hours
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-[#071d38] sm:text-base">
                                    Mon – Sat
                                </p>

                                <p className="text-xs text-slate-500 sm:text-sm">
                                    9:00 AM – 7:00 PM IST
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


                {/* =====================================================
                    RIGHT SIDE — FORM
                ====================================================== */}
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(7,29,56,0.08)] sm:p-8 lg:p-10">

                    {/* Heading */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-[#071d38] sm:text-4xl">
                            Request a Quote
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                            Fill in your details and we’ll get back to you
                            with a customized quote.
                        </p>
                    </div>


                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >

                        {/* Honeypot */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                                >
                                    Full Name *
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder=""
                                    className="h-12 w-full rounded-md border border-slate-300 bg-[#f7f8fa] px-4 text-sm text-[#071d38] outline-none transition focus:border-[#d9aa17] focus:ring-1 focus:ring-[#d9aa17]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                                >
                                    Email *
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="h-12 w-full rounded-md border border-slate-300 bg-[#f7f8fa] px-4 text-sm text-[#071d38] outline-none transition focus:border-[#d9aa17] focus:ring-1 focus:ring-[#d9aa17]"
                                />
                            </div>

                        </div>


                        {/* Row 2 */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                                >
                                    Phone *
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="h-12 w-full rounded-md border border-slate-300 bg-[#f7f8fa] px-4 text-sm text-[#071d38] outline-none transition focus:border-[#d9aa17] focus:ring-1 focus:ring-[#d9aa17]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                                >
                                    Company Name
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    className="h-12 w-full rounded-md border border-slate-300 bg-[#f7f8fa] px-4 text-sm text-[#071d38] outline-none transition focus:border-[#d9aa17] focus:ring-1 focus:ring-[#d9aa17]"
                                />
                            </div>

                        </div>


                        {/* Product Interest */}
                        <div>
                            <label
                                htmlFor="product"
                                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                            >
                                Product Interest
                            </label>

                            <select
                                id="product"
                                name="product_interest"
                                defaultValue=""
                                className="h-12 w-full rounded-md border border-slate-300 bg-[#f7f8fa] px-4 text-sm text-[#071d38] outline-none transition focus:border-[#d9aa17] focus:ring-1 focus:ring-[#d9aa17]"
                            >
                                <option value="" disabled>
                                    Select a product / service
                                </option>

                                <option value="Coal Supply">
                                    Coal Supply
                                </option>

                                <option value="Billets Trading">
                                    Billets Trading
                                </option>

                                <option value="MS Scrap Supply">
                                    MS Scrap Supply
                                </option>

                                <option value="Industrial Logistics">
                                    Industrial Logistics
                                </option>

                                <option value="Other">
                                    Other
                                </option>
                            </select>
                        </div>


                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                            >
                                Message *
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                placeholder="Tell us about your requirement — grade, quantity, delivery location, timeline..."
                                className="min-h-[145px] w-full resize-none rounded-md border border-slate-300 bg-[#f7f8fa] px-4 py-4 text-sm leading-6 text-[#071d38] outline-none transition placeholder:text-slate-400 focus:border-[#d9aa17] focus:ring-1 focus:ring-[#d9aa17]"
                            />
                        </div>


                        {/* Status */}
                        {status.message && (
                            <div
                                className={`rounded-md px-4 py-3 text-sm leading-6 ${status.type === "success"
                                        ? "border border-green-200 bg-green-50 text-green-700"
                                        : "border border-red-200 bg-red-50 text-red-700"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}


                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#071d38] px-7 text-sm font-bold text-white transition hover:bg-[#0b2a50] disabled:cursor-not-allowed disabled:opacity-60 sm:px-8"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Enquiry
                                    <Send size={16} />
                                </>
                            )}
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}