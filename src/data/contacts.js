import { Mail, Phone, Globe, Link2, Palette } from "lucide-react";
import { profile } from "./cv";

export const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  { icon: Globe, label: profile.website, href: profile.websiteUrl },
  { icon: Link2, label: profile.linkedin, href: profile.linkedinUrl },
  { icon: Palette, label: profile.behance, href: profile.behanceUrl },
];

export const isExternal = (href) => href.startsWith("http");
export const CV_URL = "/files/UIUXDesign_QuachDangHoangMy.pdf";
