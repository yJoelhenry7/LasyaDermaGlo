import { doctor, siteConfig } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": `${siteConfig.url}/#clinic`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.logo}`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st Floor, Opp. Fasttracks, DDC Road, Danivelpeta",
          addressLocality: "Rajahmundry",
          postalCode: "533108",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          addressCountry: "IN",
        },
        sameAs: [siteConfig.socials.instagram, siteConfig.socials.whatsapp],
        priceRange: "$$",
        medicalSpecialty: [
          "Dermatology",
          "Cosmetic Dermatology",
          "Aesthetic Medicine",
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "20:00",
        },
      },
      {
        "@type": "Physician",
        "@id": `${siteConfig.url}/#doctor`,
        name: doctor.name,
        jobTitle: doctor.title,
        image: `${siteConfig.url}${doctor.image}`,
        worksFor: { "@id": `${siteConfig.url}/#clinic` },
        medicalSpecialty: "Dermatology",
        description: doctor.shortBio,
        knowsLanguage: doctor.languages,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#clinic` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
