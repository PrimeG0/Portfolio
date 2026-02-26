import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f9dbff] pt-20">
      {/* --- SEMI-CIRCLE DIVIDER --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="relative block w-full h-[70px] md:h-[150px]"
        >
          <path
            fill="#f9dbff"
            d="M0,320 C480,100 960,100 1440,320 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>

      {/* --- FOOTER CONTENT --- */}
      <div className="max-w-7xl mx-auto px-8 pb-12 text-[#2d1b2e]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="footxt text-4xl font-black ">PrimeG</h2>
            <p className="mono mt-4 text-[#2d1b2e]/70 max-w-sm font-medium font-mono">
              Designing the future with pastel precision and smooth interactions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase text-xs tracking-widest opacity-50">Menu</span>
              <nav className="mono flex flex-col gap-2 font-semibold">
                <a href="#" className="hover:opacity-60 transition-opacity">Work</a>
                <a href="#" className="hover:opacity-60 transition-opacity">About</a>
                <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <span className=" font-bold uppercase text-xs tracking-widest opacity-50">Social</span>
              <nav className="mono flex flex-col gap-2 font-semibold">
                <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
                <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
              </nav>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-8 border-t border-[#2d1b2e]/10 flex flex-col md:flex-row justify-between text-sm font-medium opacity-60 gap-4">
          <p>© 2026 PrimeG. Built with Love and Passion.</p>
          <p>Modern Webdesign solutions.</p>
        </div>
      </div>
    </footer>
  );
}
