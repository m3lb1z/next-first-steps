import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Title',
  description: 'Contact Description',
  keywords: ['contact page', 'escrito en español'],
};

export default function Contact() {
  return (
    <p className="text-6xl">Esta es la página de contact</p>
  );
}
