import React from 'react';
import { Container } from './Container.jsx';
import { Terminal, Github, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span className="text-sm font-bold text-slate-900 dark:text-white">DevBoard</span>
              <span className="text-xs text-slate-400 dark:text-slate-500">· Tech Events & Hackathons</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
              A responsive discovery web application built with JavaScript, React, and Tailwind CSS for discovering high-impact engineering workshops, developer conferences, and global hackathons.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1 text-slate-400">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">React + JavaScript</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DevBoard. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>for developer communities worldwide</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
