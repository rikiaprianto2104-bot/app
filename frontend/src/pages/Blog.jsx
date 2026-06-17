import React from 'react';
import { FileText, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../mock';

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#eaf6ff] dark:bg-[#0d9eff]/10 flex items-center justify-center text-[#0d9eff]">
          <FileText size={28} />
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Blog
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          Thoughts on AI, SEO, GEO, and the evolving landscape of digital marketing.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.03] hover:border-[#0d9eff]/60 hover:shadow-xl hover:shadow-[#0d9eff]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0d9eff] bg-[#eaf6ff] dark:bg-[#0d9eff]/10 px-3 py-1 rounded-full">
              {post.tag}
            </span>
            <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white leading-snug group-hover:text-[#0d9eff] transition-colors">
              {post.title}
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-5 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} /> {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
