import React from 'react';

const SchemaOrg = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Chanakya International School",
        "url": "https://chanakyatheglobalschool.com",
        "logo": "https://chanakyatheglobalschool.com/school_logo.png",
        "description": "Chanakya International School is a premier Cambridge International (IGCSE) school in Palghar, dedicated to academic excellence and holistic development.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shirgaon, New Satpati Road",
            "addressLocality": "Palghar",
            "addressRegion": "Maharashtra",
            "postalCode": "401404",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9730390599",
            "contactType": "admissions",
            "email": "info@chanakyatheglobalschool.com",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "mr"]
        },
        "sameAs": [
            "https://www.facebook.com/share/18YbEc2uc2/",
            "https://www.instagram.com/chanakya_the_global_school/"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Chanakya International School",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shirgaon, New Satpati Road",
            "addressLocality": "Palghar",
            "addressRegion": "Maharashtra",
            "postalCode": "401404",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.6936",
            "longitude": "72.7655"
        },
        "url": "https://chanakyatheglobalschool.com",
        "telephone": "+919730390599",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "09:00",
                "closes": "17:00"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    );
};

export default SchemaOrg;
