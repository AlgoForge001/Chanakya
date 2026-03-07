import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Chanakya International School Palghar",
    description: "Get in touch with Chanakya International School in Palghar for admissions, campus tours, or general inquiries. Find our location, phone, and email details here.",
    keywords: ["Contact Chanakya School", "School Location Palghar", "School Admission Inquiry", "Chanakya School Phone"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
