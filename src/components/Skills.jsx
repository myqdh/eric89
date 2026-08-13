import { Sparkles, Wrench, Languages as LanguagesIcon } from "lucide-react";
import { skills, tools, languages } from "../data/cv";
import Reveal from "./Reveal";

function TagGroup({ icon: Icon, title, items }) {
  return (
    <Reveal className="flex-1 min-w-[260px]">
      <div className="flex items-center gap-2 mb-5">
        <Icon size={18} className="text-ember" />
        <h3 className="text-sm font-bold uppercase tracking-widest">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 text-sm font-medium border border-line bg-paper hover:border-ember hover:text-ember transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-line bg-paper-warm">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-12 sm:mb-16">
            Skills &amp; Tools
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-x-12 gap-y-12">
          <TagGroup icon={Sparkles} title="Skills" items={skills} />
          <TagGroup icon={Wrench} title="Tools" items={tools} />
        </div>

        <Reveal delay={0.1} className="mt-14 sm:mt-16 pt-10 border-t border-line">
          <div className="flex items-center gap-2 mb-6">
            <LanguagesIcon size={18} className="text-ember" />
            <h3 className="text-sm font-bold uppercase tracking-widest">Language</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {languages.map((lang) => (
              <div key={lang.name} className="border border-line bg-paper p-5">
                <p className="text-lg font-bold mb-1">{lang.name}</p>
                <p className="text-sm text-ink/70">{lang.detail}</p>
                {lang.detail2 && (
                  <p className="text-sm text-ink/70">{lang.detail2}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
