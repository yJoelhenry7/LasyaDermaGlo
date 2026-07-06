export const siteConfig = {
  name: "Derma Glo",
  tagline: "Healthy, confident skin starts here",
  description:
    "Advanced dermatology and modern aesthetic treatments designed to improve your skin health and confidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dermaglo.com",
  logo: "/images/logo.png",
  favicons: {
    ico: "/images/favicon.ico",
    png16: "/images/favicon-16x16.png",
    png32: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
    android192: "/images/android-chrome-192x192.png",
    android512: "/images/android-chrome-512x512.png",
    manifest: "/images/site.webmanifest",
  },
  phone: "+91 90639 14333",
  email: "formoredermaglo@gmail.com",
  address:
    "1st Floor, Opp. Fasttracks, DDC Road, Danivelpeta, Rajahmundry – 533 108",
};

export const seoKeywords = [
  "dermatologist Rajahmundry",
  "skin clinic Rajahmundry",
  "dermatology clinic",
  "skincare clinic",
  "acne treatment",
  "laser hair removal",
  "laser skin treatment",
  "chemical peels",
  "botox and fillers",
  "anti-aging treatments",
  "pigmentation treatment",
  "melasma treatment",
  "cosmetic dermatology",
  "skin rejuvenation",
  "hydrafacial",
  "microneedling",
  "PRP therapy",
  "scar reduction",
  "skin brightening",
  "medical dermatology",
  "aesthetic dermatology",
  "Derma Glo",
  "Dr G Lasya Priya dermatologist",
];

export const doctor = {
  name: "Dr. G. Lasya Priya",
  shortName: "Dr. G. Lasya Priya",
  title: "Dermatologist & Aesthetic Specialist",
  image: "/images/doctor.jpeg",
  qualifications: ["MD", "DVL"],
  fellowship:
    "Fellowship in cosmetic dermatology, lasers & anti-aging",
  bio: "With expertise in medical dermatology and advanced aesthetic treatments, Dr. G. Lasya Priya provides safe, effective, and personalized care for every patient.",
  shortBio:
    "Board-certified dermatologist specializing in medical and cosmetic skin care, with advanced training in lasers and anti-aging treatments.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const treatmentTags = [
  "Acne & Skin Health",
  "Chemical Peels",
  "Laser Treatments",
  "Botox & Fillers",
  "Skin Rejuvenation",
  "Aging Solutions",
  "Pigmentation Care",
  "Scar Reduction",
  "Hair Loss Treatment",
  "PRP Therapy",
  "Hydrafacial",
  "Microneedling",
  "Skin Brightening",
  "Sun Damage Repair",
  "Melasma Treatment",
];

export const heroTreatments = [
  {
    label: "Pigmentation Care",
    image:
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=120&q=80",
  },
  {
    label: "Aging Solutions",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=120&q=80",
  },
  {
    label: "Skin Rejuvenation",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=120&q=80",
  },
  {
    label: "Botox & Fillers",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=120&q=80",
  },
  {
    label: "Laser Treatments",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=120&q=80",
  },
  {
    label: "Chemical Peels",
    image:
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=120&q=80",
  },
  {
    label: "Acne & Skin Health",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&q=80",
  },
  {
    label: "Scar Reduction",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=120&q=80",
  },
  {
    label: "Hydrafacial",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&q=80",
  },
  {
    label: "Microneedling",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=120&q=80",
  },
  {
    label: "PRP Therapy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=120&q=80",
  },
  {
    label: "Melasma Treatment",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&q=80",
  },
];

export const services = [
  {
    id: "acne",
    slug: "acne-skin-health",
    title: "Acne & skin health",
    description:
      "Personalized dermatology care for acne, pigmentation, and long-term skin maintenance.",
    longDescription:
      "Our acne and skin health program combines medical-grade diagnostics with customized treatment plans for active breakouts, post-acne marks, and ongoing skin maintenance. We focus on long-term results through evidence-based protocols tailored to your skin type and lifestyle.",
    benefits: [
      "Comprehensive skin assessment and diagnosis",
      "Customized medical and aesthetic treatment plans",
      "Pigmentation and acne scar management",
      "Long-term maintenance and skincare guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1200&q=80",
    icon: "/images/icons/acne_skin_icon.svg",
  },
  {
    id: "botox",
    slug: "botox-fillers",
    title: "Botox & fillers",
    description:
      "Subtle enhancements that refresh your features without changing who you are.",
    longDescription:
      "Enhance your natural beauty with precision injectables administered by qualified specialists. From softening fine lines to restoring facial volume, every treatment is planned for balanced, natural-looking results.",
    benefits: [
      "Wrinkle reduction and prevention",
      "Facial contouring and volume restoration",
      "Natural, refreshed appearance",
      "Minimal downtime with expert aftercare",
    ],
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
    icon: "/images/icons/botox_icon.svg",
  },
  {
    id: "laser",
    slug: "laser-treatments",
    title: "Laser treatments",
    description:
      "Advanced laser solutions for hair removal, pigmentation, texture, and scars.",
    longDescription:
      "State-of-the-art laser technology addresses a wide range of skin concerns with precision and safety. Whether targeting unwanted hair, uneven tone, or textural irregularities, treatments are customized to your skin's unique needs.",
    benefits: [
      "Laser hair reduction",
      "Pigmentation and sun damage correction",
      "Scar and texture improvement",
      "Safe protocols for diverse skin types",
    ],
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
    icon: "/images/icons/laser_treatment_icon.svg",
  },
  {
    id: "anti-aging",
    slug: "anti-aging-solutions",
    title: "Anti-aging solutions",
    description:
      "Target lines, volume loss, dullness, and tired skin with safe, proven treatments.",
    longDescription:
      "Restore radiance and youthful vitality with a holistic anti-aging approach. We combine in-clinic treatments with personalized skincare plans to address fine lines, loss of firmness, and dullness for visibly healthier skin.",
    benefits: [
      "Fine line and wrinkle reduction",
      "Skin tightening and firmness",
      "Improved tone, texture, and glow",
      "Preventive and restorative care plans",
    ],
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
    icon: "/images/icons/anti_aging_icon.svg",
  },
];

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const clinicValues = [
  "Advanced science-backed treatment methods",
  "A highly skilled and certified expert team",
  "Personalized care tailored to your unique skin",
];

export const stats = [
  { value: "10+", label: "Years of medical excellence" },
  { value: "2,000+", label: "Procedures" },
  { value: "50+", label: "Treatments" },
  { value: "Since 2016", label: "Trusted care" },
];

export const conditions = [
  "Acne and breakouts",
  "Chronic skin conditions",
  "Eczema and dermatitis",
  "Pigmentation concerns",
  "Skin care",
];

export const googleReviews = [
  {
    id: "venkateshwara",
    name: "venkateshwara putharakulu",
    meta: "1 review",
    rating: 5,
    timeAgo: "2 months ago",
    quote:
      "After just a few sessions, my skin looks brighter and smoother. I'm really happy with the results. Highly recommend this clinic for anyone looking for professional skin care!",
    avatarColor: "#0d5f62",
  },
  {
    id: "kamalesh",
    name: "kamalesh",
    meta: "5 reviews",
    rating: 5,
    timeAgo: "2 months ago",
    quote:
      "Best visible results for tattoo removal and carbon laser treatment i have recently visited it and it's 100% worth",
    avatarColor: "#128386",
  },
  {
    id: "durga",
    name: "DURGA Devimobles",
    meta: "1 review",
    rating: 5,
    timeAgo: "2 weeks ago",
    isNew: true,
    quote: "Good treatment and way of talking good 👍",
    avatarColor: "#1a6b5c",
  },
  {
    id: "venkatesh-m",
    name: "Venkatesh Malleddi",
    meta: "1 review",
    rating: 5,
    timeAgo: "3 weeks ago",
    isNew: true,
    quote: "Good service, good results",
    avatarColor: "#2a7a52",
  },
  {
    id: "alekhya",
    name: "alekhya komallapalli",
    meta: "2 reviews",
    rating: 5,
    timeAgo: "6 days ago",
    isNew: true,
    quote: "Very Good result",
    avatarColor: "#3aa8ab",
  },
  {
    id: "mahesh",
    name: "Mahesh Podimahesh",
    meta: "1 review",
    rating: 5,
    timeAgo: "6 days ago",
    isNew: true,
    quote:
      "Best treatment and with advanced equipment and well maintained good and the way madam say meditation is good and I really suggest to my friend and family",
    avatarColor: "#986a3e",
  },
  {
    id: "k-nani",
    name: "K Nani",
    meta: "2 reviews",
    rating: 5,
    timeAgo: "2 weeks ago",
    isNew: true,
    quote: "Good",
    avatarColor: "#0a4f52",
  },
  {
    id: "lokesh",
    name: "nandigama lokesh",
    meta: "Local Guide · 66 reviews · 11 photos",
    rating: 5,
    timeAgo: "2 weeks ago",
    isNew: true,
    quote:
      "Staff behaviour is very nice and the madam treatment is also very good and with the results I am happy good choice to visit for skin treatment",
    avatarColor: "#1e7a6e",
  },
  {
    id: "rajesh",
    name: "rajesh dhoni",
    meta: "5 reviews · 3 photos",
    rating: 5,
    timeAgo: "3 weeks ago",
    isNew: true,
    quote: "The treatment is very good.",
    avatarColor: "#128386",
  },
  {
    id: "sattibabu",
    name: "Sattibabu Kola",
    meta: "2 reviews · 10 photos",
    rating: 5,
    timeAgo: "2 days ago",
    isNew: true,
    quote:
      "I have a skin problem, please treat it, thank you, madam.",
    translated: true,
    avatarColor: "#0d5f62",
  },
];

export type GoogleReview = (typeof googleReviews)[number];

export const blogPosts = [
  {
    slug: "daily-skincare-habits",
    title: "Daily skincare habits that damage your skin",
    category: "Anti-aging",
    date: "Mar 5, 2026",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
  },
  {
    slug: "laser-treatments-guide",
    title: "Laser treatments: are they right for you?",
    category: "Skin Health",
    date: "Mar 4, 2026",
    image:
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&q=80",
  },
  {
    slug: "stress-and-skin",
    title: "How stress affects your skin health",
    category: "Skin Health",
    date: "Mar 1, 2026",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    slug: "chemical-peels-guide",
    title: "Chemical peels: what to expect before and after",
    category: "Acne Care",
    date: "Feb 27, 2026",
    image:
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&q=80",
  },
];

export const faqs = [
  {
    question: "What treatment is right for my skin type?",
    answer:
      "During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies based on your skin condition and treatment goals. Your dermatologist will create a personalized plan during your initial consultation.",
  },
  {
    question: "Are the procedures painful?",
    answer:
      "Most treatments involve minimal discomfort. We use topical numbing agents and advanced techniques to ensure your comfort throughout every procedure.",
  },
  {
    question: "Do you offer personalized treatment plans?",
    answer:
      "Yes. Every patient receives a customized treatment plan tailored to their unique skin type, concerns, and lifestyle.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive skin analysis, discussion of your concerns and goals, and a recommended treatment plan with transparent pricing.",
  },
];

export const therapyOptions = [
  "Acne Care",
  "Anti-Aging",
  "Laser Treatment",
  "Botox & Fillers",
  "Skin Consultation",
];
