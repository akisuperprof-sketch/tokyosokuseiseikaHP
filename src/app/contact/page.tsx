import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "東京促成青果株式会社へのお問い合わせはこちらから。",
};

export default function ContactPage() {
  const enabled = process.env.CONTACT_FORM_ENABLED === "true";
  return <ContactForm enabled={enabled} />;
}
