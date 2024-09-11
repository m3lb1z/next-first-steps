import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'Pricing Description',
  keywords: ['pricing page', 'escrito en español'],
};

export default function Pricing() {
  return (
    <p className="text-6xl">Esta es la página de pricing</p>
  );
}
