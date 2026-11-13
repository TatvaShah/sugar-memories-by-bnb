import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sugar Memories by BnB",
  tagline: "Eggless cream, bundt, designer and bento cakes, made to order.",
  category: "Eggless custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://sugar-memories-by-bnb-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#3a3a6b" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Eggless cakes, made to order",
    headline: "Cakes for anniversaries, birthdays and celebrations",
    subhead: "Eggless cream, bundt, designer and bento cakes, including rasmalai, strawberry and vanilla Biscoff. Send a message to order, with pickup in Brampton.",
    images: [
      { src: "/images/post-1.jpg", alt: "A 6 inch eggless rasmalai anniversary cake from Sugar Memories by BnB", width: 1080, height: 1440 },
      { src: "/images/post-7.jpg", alt: "A two tier floral rasmalai cake from Sugar Memories by BnB", width: 1080, height: 1440 },
      { src: "/images/post-6.jpg", alt: "A two tier vanilla Biscoff cake from Sugar Memories by BnB", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/sugar_memories_by_bnb" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Eggless cakes, made to order",
    "Cream, bundt, designer and bento cakes",
    "Pickup in Brampton",
    "Making sugary memories since 2019",
  ],

  about: {
    title: "Welcome to Sugar Memories by BnB",
    body: [
      "Sugar Memories by BnB is a Brampton home bakery making eggless cakes to order, including cream, bundt, designer and bento cakes. The bakery has been making sugary memories since 2019.",
      "Recent orders have included a 6 inch rasmalai cake, a 6 inch strawberry cake, and two tier cakes in 8 and 5 inch sizes, including a vanilla Biscoff cake good for about 30 people. Send a message on Instagram to order. Pickup is in Brampton.",
    ],
    image: { src: "/images/post-7.jpg", alt: "A two tier floral rasmalai cake from Sugar Memories by BnB", width: 1080, height: 1440 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message for a quote on your date, flavour and size.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Cream cakes" },
          { name: "Bundt cakes" },
          { name: "Designer cakes" },
          { name: "Bento cakes" },
        ],
      },
      {
        title: "Flavours and sizes from recent orders",
        items: [
          { name: "Eggless rasmalai cake", description: "A 6 inch cake, and a two tier 8 and 5 inch cake." },
          { name: "Strawberry cake", description: "A 6 inch cake." },
          { name: "Two tier vanilla Biscoff cake", description: "8 inch and 5 inch tiers, good for about 30 people." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "A 6 inch eggless rasmalai anniversary cake from Sugar Memories by BnB", caption: "Rasmalai anniversary cake", href: "https://www.instagram.com/p/DfnZn7Po4oN/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "A two tier floral rasmalai cake from Sugar Memories by BnB", caption: "Two tier rasmalai cake", href: "https://www.instagram.com/p/DX75O3YiUJd/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "A two tier vanilla Biscoff cake from Sugar Memories by BnB", caption: "Vanilla Biscoff cake", href: "https://www.instagram.com/p/DYXiEHKlX7C/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1176, alt: "An eggless rasmalai cake from Sugar Memories by BnB", caption: "Eggless rasmalai cake", href: "https://www.instagram.com/p/DeMXGT6MO0Q/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "A birthday cake from Sugar Memories by BnB", caption: "A birthday cake", href: "https://www.instagram.com/reel/DfIXurMJnAO/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "A 6 inch strawberry cake from Sugar Memories by BnB", caption: "Strawberry cake", href: "https://www.instagram.com/p/DaTeYC9iVwJ/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sugar_memories_by_bnb",
    embeds: ["https://www.instagram.com/p/DfnZn7Po4oN/", "https://www.instagram.com/p/DYXiEHKlX7C/", "https://www.instagram.com/p/DX75O3YiUJd/"],
  },

  order: {
    label: "How to order",
    title: "Order in a DM",
    intro: "Send a message on Instagram with your date, flavour and size. Pickup is in Brampton.",
    dmMessage: "Hi Sugar Memories by BnB! I would like to order.\nDate needed:\nFlavour and design:\nSize:\nPickup in Brampton:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order by Instagram DM", href: "https://ig.me/m/sugar_memories_by_bnb" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram with your date, flavour and size." },
    { q: "Are the cakes eggless?", a: "Yes. Sugar Memories by BnB is an eggless home bakery." },
    { q: "Where is pickup?", a: "Pickup is in Brampton." },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/sugar_memories_by_bnb/" }],
  },

  seo: {
    title: "Sugar Memories by BnB | Eggless cakes in Brampton",
    description: "Eggless cream, bundt, designer and bento cakes in Brampton, made to order since 2019. Send an Instagram DM to order, with pickup in Brampton.",
    keywords: ["eggless cakes Brampton", "rasmalai cake GTA", "Sugar Memories by BnB"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
