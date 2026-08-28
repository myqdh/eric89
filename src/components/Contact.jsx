import { useState, useEffect } from "react";
import { Phone, Mail, Globe, Link2, Palette, ArrowUpRight, Eye, MapPin } from "lucide-react";
import { profile } from "../data/cv";
import Reveal from "./Reveal";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  { icon: Globe, label: profile.website, href: profile.websiteUrl },
  { icon: Link2, label: profile.linkedin, href: profile.linkedinUrl },
  { icon: Palette, label: profile.behance, href: profile.behanceUrl },
];

export default function Contact() {
  const [views, setViews] = useState(2);

  useEffect(() => {
    // Đếm lượt truy cập mượt mà, lưu trong máy người dùng, không gọi mạng ngoài
    const stored = localStorage.getItem("portfolio_views_count");
    let current = stored ? parseInt(stored, 10) : 2;

    // Chỉ tăng số view nếu là phiên truy cập mới trong tab/trình duyệt
    if (!sessionStorage.getItem("view_counted")) {
      current += 1;
      localStorage.setItem("portfolio_views_count", current.toString());
      sessionStorage.setItem("view_counted", "true");
    }

    setViews(current);
  }, []);

  return (
    <section id="contact" className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-t border-line bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-ember">
            Contact
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-[11vw] sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
            Let&rsquo;s work
            <br />
            together.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring group mt-10 sm:mt-14 inline-flex items-center gap-3 text-lg sm:text-2xl font-medium border-b-2 border-ember pb-1"
          >
            {profile.email}
            <ArrowUpRight
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        <Reveal delay={0.22}>
          <ul className="mt-14 sm:mt-16 flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-paper/15">
            {links.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-paper/70 hover:text-ember transition-colors duration-200"
                >
                  <Icon size={16} strokeWidth={1.8} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-paper/50">
            <p>&copy; {new Date().getFullYear()} {profile.name}. {profile.location}.</p>

            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5 text-paper/70">
                <Eye size={14} className="text-ember" />
                <span>{views.toLocaleString()} views</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}