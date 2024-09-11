import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Title',
 description: 'About Description',
 keywords: ['about page', 'escrito en español'],
};

export default function About() {
    return (
        <p className="text-6xl">Esta es la página de about</p>
    )
}