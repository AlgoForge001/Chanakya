import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Events & Activities | Chanakya International Palghar",
    description: "Stay updated with the latest events, annual days, and sports meets at Chanakya International School. Celebrate the vibrant moments of our student life.",
    keywords: ["School Events Palghar", "Annual Day Palghar", "Sports Meet Palghar", "School Activities"],
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
