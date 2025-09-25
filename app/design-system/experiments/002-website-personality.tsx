'use client';

import { useEffect } from 'react';

const SELECTED_FONTS = {
  classic: 'Merriweather',
  bookish: 'Gelasio',
  pastel: 'Public Sans',
  vibrant: 'Nunito',
};

const ALL_FONTS = Object.values(SELECTED_FONTS);

function loadGoogleFonts(fonts: string[]) {
  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@400;600;700&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
}

const sampleCards = [
  { title: 'Lifelong Learner', desc: 'Daily compounding of skills and knowledge.' },
  { title: 'Software Engineer', desc: 'Full-stack mindset with strong fundamentals.' },
  { title: 'Voracious Reader', desc: 'Wide, deep, and relentlessly curious.' },
];

function CardsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
      {children}
    </div>
  );
}

export default function WebsitePersonalityExperiment() {
  useEffect(() => {
    loadGoogleFonts(ALL_FONTS);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-gray-900">Experiment 002 — Website Personality</h1>

        {/* Classic */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'${SELECTED_FONTS.classic}', serif` }}>Classic</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Merriweather</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`classic-${idx}`} className="h-full" style={{ fontFamily: `'${SELECTED_FONTS.classic}', serif` }}>
                <div className="h-full p-6 bg-white rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{c.title}</h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Book-like */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'${SELECTED_FONTS.bookish}', serif` }}>Book-like</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Gelasio</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`book-${idx}`} className="h-full" style={{ fontFamily: `'${SELECTED_FONTS.bookish}', serif` }}>
                <div className="h-full p-6 rounded-2xl" style={{ backgroundColor: '#fffdf7' }}>
                  <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                  <p className="text-gray-800 mt-2 leading-8">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Pastel */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'${SELECTED_FONTS.pastel}', sans-serif` }}>Pastel</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Public Sans</div>
          <CardsGrid>
            {[
              { key: 'pastel-green', bg: '#ecfdf5', border: '#a7f3d0', head: '#065f46', body: '#065f46' },
              { key: 'pastel-blue', bg: '#eff6ff', border: '#bfdbfe', head: '#1e3a8a', body: '#1e3a8a' },
              { key: 'pastel-peach', bg: '#fff7ed', border: '#fed7aa', head: '#9a3412', body: '#9a3412' },
              { key: 'pastel-lilac', bg: '#faf5ff', border: '#e9d5ff', head: '#5b21b6', body: '#5b21b6' },
            ].map((tone, idx) => (
              <div key={tone.key} className="h-full" style={{ fontFamily: `'${SELECTED_FONTS.pastel}', sans-serif` }}>
                <div className="h-full p-6 rounded-2xl border" style={{ backgroundColor: tone.bg, borderColor: tone.border }}>
                  <h3 className="text-xl font-semibold" style={{ color: tone.head }}>{sampleCards[idx % sampleCards.length].title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: tone.body, opacity: 0.8 }}>{sampleCards[idx % sampleCards.length].desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Vibrant */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'${SELECTED_FONTS.vibrant}', sans-serif` }}>Vibrant</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Nunito</div>
          <CardsGrid>
            {[
              { key: 'vibrant-sky', bg: '#0ea5e9', tint: 'rgba(255,255,255,0.92)' },
              { key: 'vibrant-indigo', bg: '#4f46e5', tint: 'rgba(255,255,255,0.92)' },
              { key: 'vibrant-rose', bg: '#e11d48', tint: 'rgba(255,255,255,0.92)' },
              { key: 'vibrant-emerald', bg: '#10b981', tint: 'rgba(255,255,255,0.92)' },
            ].map((tone, idx) => (
              <div key={tone.key} className="h-full" style={{ fontFamily: `'${SELECTED_FONTS.vibrant}', sans-serif` }}>
                <div className="h-full p-6" style={{ backgroundColor: tone.bg, borderRadius: 0 }}>
                  <h3 className="text-xl font-semibold" style={{ color: tone.tint }}>{sampleCards[idx % sampleCards.length].title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: tone.tint, opacity: 0.9 }}>{sampleCards[idx % sampleCards.length].desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Brutalist Mono */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Public Sans', sans-serif` }}>Brutalist Mono</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Public Sans (bold)</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`brut-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div className="h-full p-6 bg-white rounded-none border-2 border-black">
                  <h3 className="text-2xl font-extrabold tracking-tight text-black">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-black">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Newspaper Editorial */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Merriweather', serif` }}>Newspaper Editorial</h2>
          <div className="text-xs text-gray-500 mb-4">Fonts: Merriweather (title) + Public Sans (body)</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`editorial-${idx}`} className="h-full" style={{ fontFamily: `'Merriweather', serif` }}>
                <div className="h-full p-6 bg-white rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-2 leading-8 text-gray-800" style={{ fontFamily: `'Public Sans', sans-serif` }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Swiss Minimal */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Public Sans', sans-serif` }}>Swiss Minimal</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Public Sans</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`swiss-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div className="h-full p-6 bg-white rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-900">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Neo-Glass */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Nunito', sans-serif` }}>Neo-Glass</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Nunito</div>
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 40% at 20% 20%, rgba(147,197,253,0.35) 0%, rgba(147,197,253,0) 60%),\
                   radial-gradient(50% 50% at 80% 70%, rgba(253,164,175,0.35) 0%, rgba(253,164,175,0) 60%),\
                   linear-gradient(180deg, #f8fafc, #eef2f7)'
              }}
            />
            <div className="relative p-4">
              <CardsGrid>
                {sampleCards.map((c, idx) => (
                  <div key={`glass-${idx}`} className="h-full" style={{ fontFamily: `'Nunito', sans-serif` }}>
                    <div
                      className="h-full p-8 rounded-2xl"
                      style={{
                        background: 'rgba(255,255,255,0.55)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.5)'
                      }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                      <p className="mt-2 leading-relaxed text-gray-800">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </CardsGrid>
            </div>
          </div>
        </section>

        {/* Duotone Poster */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Nunito', sans-serif` }}>Duotone Poster</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Nunito</div>
          <CardsGrid>
            {[
              { bg: 'linear-gradient(135deg,#0ea5e9,#4f46e5)', tint: 'rgba(255,255,255,0.92)' },
              { bg: 'linear-gradient(135deg,#ef4444,#f59e0b)', tint: 'rgba(255,255,255,0.92)' },
              { bg: 'linear-gradient(135deg,#10b981,#14b8a6)', tint: 'rgba(255,255,255,0.92)' },
            ].map((tone, idx) => (
              <div key={`duotone-${idx}`} className="h-full" style={{ fontFamily: `'Nunito', sans-serif` }}>
                <div className="h-full p-6 rounded-none" style={{ background: tone.bg }}>
                  <h3 className="text-xl font-semibold" style={{ color: tone.tint }}>{sampleCards[idx % sampleCards.length].title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: tone.tint, opacity: 0.92 }}>{sampleCards[idx % sampleCards.length].desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Handcrafted Notebook */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Gelasio', serif` }}>Handcrafted Notebook</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Gelasio</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`notebook-${idx}`} className="h-full" style={{ fontFamily: `'Gelasio', serif` }}>
                <div className="h-full p-6 rounded-2xl" style={{ backgroundColor: '#fffef9', border: '1px dotted #e5e7eb' }}>
                  <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-2 leading-8 text-gray-800">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Code Terminal */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Public Sans', sans-serif` }}>Code Terminal</h2>
          <div className="text-xs text-gray-500 mb-4">Fonts: Public Sans (section) + Monospace (content)</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`terminal-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div
                  className="h-full rounded-md overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(180deg,#0b1020 0%,#0a0f1c 100%)',
                    boxShadow:
                      'inset 0 0 0 1px rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Window bar */}
                  <div className="px-3 py-2 flex items-center gap-2" style={{ background: '#0f1529', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="inline-block h-3 w-3 rounded-full" style={{ background: '#ef4444' }} />
                    <span className="inline-block h-3 w-3 rounded-full" style={{ background: '#f59e0b' }} />
                    <span className="inline-block h-3 w-3 rounded-full" style={{ background: '#22c55e' }} />
                    <span className="ml-2 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>terminal</span>
                  </div>
                  {/* Scanlines + grid backdrop */}
                  <div className="relative h-full">
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px),\
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: 'auto, 24px 100%'
                      }}
                    />
                    <div className="relative p-5" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace' }}>
                      <div className="text-sm" style={{ color: '#7fffd4' }}>{c.title}</div>
                      <div className="mt-2 text-[13px] leading-relaxed" style={{ color: '#9be7ff' }}>{c.desc}</div>
                      <div className="mt-4 text-[13px]">
                        <span style={{ color: '#60a5fa' }}>sivakar</span>
                        <span style={{ color: '#a78bfa' }}>@site</span>
                        <span style={{ color: '#6ee7b7' }}> ~/</span>
                        <span style={{ color: '#e5e7eb' }}>$</span>
                        <span className="ml-2" style={{ color: '#e5e7eb' }}>open personality --list</span>
                      </div>
                      <div className="mt-1 text-[13px]" style={{ color: '#e5e7eb' }}>→ classic, book-like, pastel, vibrant, brutalist, swiss, glass, duotone…</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Playful Blob */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Nunito', sans-serif` }}>Playful Blob</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Nunito</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => {
              const variants = [
                { pos1: '20% 25%', pos2: '80% 70%', pos3: '15% 80%' },
                { pos1: '70% 30%', pos2: '25% 80%', pos3: '85% 20%' },
                { pos1: '30% 75%', pos2: '75% 25%', pos3: '50% 10%' },
              ];
              const v = variants[idx % variants.length];
              const red = '#ff6b6b';
              const green = '#51cf66';
              const blue = '#339af0';
              const bg = `radial-gradient(circle at ${v.pos1}, ${red}, transparent 40%), radial-gradient(circle at ${v.pos2}, ${green}, transparent 40%), radial-gradient(circle at ${v.pos3}, ${blue}, transparent 40%), #fff`;
              return (
                <div key={`blob-${idx}`} className="h-full" style={{ fontFamily: `'Nunito', sans-serif` }}>
                  <div className="h-full p-8 rounded-3xl" style={{ background: bg }}>
                    <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-800">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </CardsGrid>
        </section>

        {/* Stripey Sections */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Signika', sans-serif` }}>Stripey Sections</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Signika</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`stripe-${idx}`} className="h-full" style={{ fontFamily: `'Signika', sans-serif` }}>
                <div className="h-full p-6 rounded-none" style={{ background: 'repeating-linear-gradient( to bottom, #f9fafb, #f9fafb 24px, #e5e7eb 25px )' }}>
                  <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Tile Mosaic */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Public Sans', sans-serif` }}>Tile Mosaic</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Public Sans</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`mosaic-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div className="h-full p-6 rounded-lg" style={{ background: '#f3f4f6', outline: '1px solid #e5e7eb' }}>
                  <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Vintage Library */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Merriweather', serif` }}>Vintage Library</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Merriweather</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`vintage-${idx}`} className="h-full" style={{ fontFamily: `'Merriweather', serif` }}>
                <div className="h-full p-6 rounded-2xl" style={{ backgroundColor: '#fbf6ee', boxShadow: 'inset 0 0 0 1px #eadfd1' }}>
                  <h3 className="text-xl font-semibold text-gray-900" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.6)' }}>{c.title}</h3>
                  <p className="mt-2 leading-8 text-gray-800">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Skeuomorphic Tabs */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Nunito', sans-serif` }}>Skeuomorphic Tabs</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Nunito</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`tabs-${idx}`} className="h-full" style={{ fontFamily: `'Nunito', sans-serif` }}>
                <div className="h-full p-6 rounded-none" style={{ background: 'linear-gradient(#f3f4f6,#fff)', boxShadow: 'inset 0 -2px 0 #e5e7eb, 0 1px 0 #e5e7eb' }}>
                  <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-800">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Big Numerals */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Gelasio', serif` }}>Big Numerals</h2>
          <div className="text-xs text-gray-500 mb-4">Fonts: Gelasio (numerals) + Public Sans (body)</div>
          <CardsGrid>
            {[0,1,2].map((n, idx) => (
              <div key={`nums-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div className="h-full p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="text-4xl font-bold" style={{ fontFamily: `'Gelasio', serif` }}>{`0${n+1}`}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">{sampleCards[idx % sampleCards.length].title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{sampleCards[idx % sampleCards.length].desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Gradient Slabs */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Nunito', sans-serif` }}>Gradient Slabs</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Nunito</div>
          <CardsGrid>
            {[
              'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
              'linear-gradient(135deg,#f093fb 0%,#f5576c 100%)',
              'linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)',
              'linear-gradient(135deg,#43e97b 0%,#38f9d7 100%)',
              'linear-gradient(135deg,#fa709a 0%,#fee140 100%)',
              'linear-gradient(135deg,#a8edea 0%,#fed6e3 100%)'
            ].map((bg, idx) => (
              <div key={`slab-${idx}`} className="h-full" style={{ fontFamily: `'Nunito', sans-serif` }}>
                <div className="h-full p-6 rounded-xl" style={{ background: bg }}>
                  <h3 className="text-xl font-semibold" style={{ color: 'rgba(255,255,255,0.98)', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{sampleCards[idx % sampleCards.length].title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>{sampleCards[idx % sampleCards.length].desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Monochrome Accent */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Public Sans', sans-serif` }}>Monochrome Accent</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Public Sans</div>
          <CardsGrid>
            {[
              { bg: '#eef2ff', color: '#3730a3' },
              { bg: '#ecfeff', color: '#155e75' },
              { bg: '#f0fdf4', color: '#166534' },
            ].map((tone, idx) => (
              <div key={`mono-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div className="h-full p-6 rounded-2xl" style={{ backgroundColor: tone.bg }}>
                  <h3 className="text-xl font-semibold" style={{ color: tone.color }}>{sampleCards[idx % sampleCards.length].title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: tone.color, opacity: 0.85 }}>{sampleCards[idx % sampleCards.length].desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>

        {/* Airmail Border */}
        <section>
          <h2 className="text-2xl text-gray-900" style={{ fontFamily: `'Public Sans', sans-serif` }}>Airmail Border</h2>
          <div className="text-xs text-gray-500 mb-4">Font: Public Sans</div>
          <CardsGrid>
            {sampleCards.map((c, idx) => (
              <div key={`airmail-${idx}`} className="h-full" style={{ fontFamily: `'Public Sans', sans-serif` }}>
                <div
                  className="h-full rounded-xl p-5 bg-white"
                  style={{
                    borderWidth: '12px',
                    borderStyle: 'solid',
                    borderImage: 'repeating-linear-gradient(45deg,#ef4444 0 12px,#ffffff 12px 24px,#2563eb 24px 36px,#ffffff 36px 48px) 12',
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{c.desc}</p>
                </div>
              </div>
            ))}
          </CardsGrid>
        </section>
      </div>
    </div>
  );
}


