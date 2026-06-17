import React from 'react';
import { Download, Briefcase, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { profile, experiences, education } from '../mock';

const Profile = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#f4faff] to-white dark:from-[#0b1220] dark:to-[#0b1220]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-[50%] overflow-hidden bg-[#ff8a2b] ring-4 ring-[#0d9eff]/60 shadow-2xl">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Profile
              </h1>
              <p className="mt-4 text-xl text-[#0d9eff] font-medium">
                {profile.title}
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <button
                  onClick={() => alert('CV download coming soon!')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d9eff] text-white font-medium shadow-lg shadow-[#0d9eff]/25 hover:bg-[#0a8de5] transition-colors duration-200"
                >
                  <Download size={18} />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          About Me
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-[#0d9eff]" />
        <p className="mt-8 text-slate-500 dark:text-slate-400 text-base md:text-lg leading-loose max-w-3xl">
          {profile.about}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {[
            { icon: Mail, label: 'Email', value: profile.email },
            { icon: Phone, label: 'Phone', value: profile.phone },
            { icon: MapPin, label: 'Location', value: profile.location },
          ].map((c) => (
            <div
              key={c.label}
              className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.03]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#eaf6ff] dark:bg-[#0d9eff]/10 flex items-center justify-center text-[#0d9eff]">
                <c.icon size={18} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-slate-400">
                {c.label}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100 break-words">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-slate-50 dark:bg-white/[0.02] py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Briefcase size={28} className="text-[#0d9eff]" />
            Experience
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#0d9eff]" />

          <div className="mt-10 relative pl-6 md:pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-10">
            {experiences.map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[33px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#0d9eff] ring-4 ring-white dark:ring-[#0b1220]" />
                <p className="text-sm text-[#0d9eff] font-medium">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {e.role}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">{e.company}</p>
                <p className="mt-2 text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <GraduationCap size={30} className="text-[#0d9eff]" />
          Education
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-[#0d9eff]" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.03] hover:border-[#0d9eff]/60 transition-colors duration-200"
            >
              <p className="text-sm text-[#0d9eff] font-medium">{e.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                {e.degree}
              </h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400">{e.school}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
