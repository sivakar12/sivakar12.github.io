'use client';

import { useState, useEffect, useRef } from 'react';
import { FONT_TIER_GREAT } from './001-font-options';
import PillSwitcher from '@/components/PillSwitcher';

// Font definitions
const FONTS = {
  cabin: 'Cabin',
  lato: 'Lato',
  merriweather: 'Merriweather',
  nunito: 'Nunito',
  signika: 'Signika',
  domine: 'Domine',
  gelasio: 'Gelasio',
  publicSans: 'Public Sans'
};

// Load Google Fonts function
const loadGoogleFonts = (fonts: string[]) => {
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@400;600;700&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
};

// Static data - same as in home-content.yaml
const personalContent = [
  { mainPoint: "Lifelong Learner", emoji: "🧠", description: "Always learning something new with intensity. The compound effect of learning something new every day is immense." },
  { mainPoint: "Software Engineer", emoji: "💻", description: "Proficient in all aspects of computer science, encompassing theory, languages, tools, and practices." },
  { mainPoint: "Voracious Reader", emoji: "📚", description: "I read many hours a day and have read hundreds of books on diverse subjects, aspiring to be a polymath." },
  { mainPoint: "Ready to work with AI", emoji: "🤖", description: "I have understanding of the concepts and know new protocols and tools to build application on top of AI." },
  { mainPoint: "Multilingual", emoji: "🌍", description: "I can talk, write, and think in English like a native. I am also rapidly improving my German, French, and a few other languages." },
  { mainPoint: "People Skills", emoji: "🤝", description: "I bond well with people from all walks of life, cultivating authentic relationships and learning from listening, despite being an introvert once." },
  { mainPoint: "Strong mathematical background", emoji: "📊", description: "With a natural aptitude for mathematics, I have a sound knowledge of algebra, geometry, calculus, statistics, and more." },
  { mainPoint: "Generalist", emoji: "💡", description: "The world is changing too fast and my solution to staying relavant is to have multiple career options open." },
  { mainPoint: "Specialist in note taking", emoji: "✍️", description: "I have developed a specialized note-taking system to keep my mind free of clutter and enhance efficiency in getting things done." },
  { mainPoint: "Eye for good art", emoji: "🎨", description: "I love good art, music, literature, and movies. As a visual thinker, I also highly value good design. I have my own music curation." },
  { mainPoint: "Stoic", emoji: "🛡️", description: "I follow time-tested principles of Stoicism to handle the challenges life throws at me with resilience." },
  { mainPoint: "Fitness Enthusiast", emoji: "💪", description: "Believing that body and mind are not separate, I understand that to ensure my brain works well, I need to take care of my body." },
  { mainPoint: "Environmentalist", emoji: "🌱", description: "I am committed to environmentalism, striving to do all I can to help save the planet from pollution and combat climate change." },
];

const HomeLayouts = () => {
  const [selectedLayout, setSelectedLayout] = useState('heroBanner');

  // Load fonts on mount
  useEffect(() => {
    loadGoogleFonts(Object.values(FONTS));
  }, []);

  const layouts = {
    // MASSIVE & BOLD
    heroBanner: {
      name: 'Hero Banner',
      component: (
        <div className="space-y-16">
          {personalContent.map((item, index) => {
            const gradients = ['from-red-600 via-pink-600 to-purple-600', 'from-blue-600 via-cyan-600 to-teal-600', 'from-green-600 via-emerald-600 to-blue-600'];
            return (
              <div key={index} className={`bg-gradient-to-r ${gradients[index % 3]} text-white p-16 rounded-3xl`}>
                <div className="text-6xl sm:text-8xl font-black mb-8" style={{ fontFamily: `'${FONTS.cabin}', sans-serif` }}>{item.mainPoint}</div>
                <div className="text-2xl sm:text-3xl max-w-4xl" style={{ fontFamily: `'${FONTS.publicSans}', sans-serif` }}>{item.description}</div>
              </div>
            );
          })}
        </div>
      )
    },

    // MINIMAL & CLEAN
    minimalCards: {
      name: 'Minimal Cards',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalContent.map((item, index) => (
            <div key={index} className="p-8 bg-white border-2 border-gray-100 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-4" style={{ fontFamily: `'${FONTS.lato}', sans-serif` }}>{item.mainPoint}</div>
              <div className="text-gray-600 text-lg" style={{ fontFamily: `'${FONTS.lato}', sans-serif` }}>{item.description}</div>
            </div>
          ))}
        </div>
      )
    },

    // TYPOGRAPHY SHOWCASE
    typographyShowcase: {
      name: 'Typography Showcase',
      component: (
        <div className="space-y-20">
          {personalContent.map((item, index) => {
            const sizes = ['text-5xl', 'text-6xl', 'text-7xl', 'text-8xl'];
            const weights = ['font-light', 'font-normal', 'font-semibold', 'font-bold', 'font-black'];
            const colors = ['text-red-600', 'text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600'];
            const fonts = [FONTS.merriweather, FONTS.nunito, FONTS.cabin, FONTS.signika, FONTS.domine];
            
            return (
              <div key={index} className="text-center">
                <div className={`${sizes[index % 5]} ${weights[index % 5]} ${colors[index % 5]} mb-8`} style={{ fontFamily: `'${fonts[index % 5]}', sans-serif` }}>
                  {item.mainPoint}
                </div>
                <div className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: `'${fonts[index % 5]}', sans-serif` }}>{item.description}</div>
              </div>
            );
          })}
        </div>
      )
    },

    // RAINBOW CARDS
    rainbowCards: {
      name: 'Rainbow Cards',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalContent.map((item, index) => {
            const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];
            return (
              <div key={index} className={`${colors[index % 8]} text-white p-8 rounded-2xl`}>
                <div className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: `'${FONTS.nunito}', sans-serif` }}>{item.mainPoint}</div>
                <div className="text-lg" style={{ fontFamily: `'${FONTS.nunito}', sans-serif` }}>{item.description}</div>
              </div>
            );
          })}
        </div>
      )
    },

    // STAGGERED LAYOUT
    staggeredLayout: {
      name: 'Staggered Layout',
      component: (
        <div className="space-y-12">
          {personalContent.map((item, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: `'${FONTS.gelasio}', serif` }}>{item.mainPoint}</div>
                <div className="text-lg text-gray-600" style={{ fontFamily: `'${FONTS.gelasio}', serif` }}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },

    // MAGAZINE STYLE
    magazineStyle: {
      name: 'Magazine Style',
      component: (
        <div className="space-y-12">
          {personalContent.map((item, index) => (
            <div key={index} className="border-l-8 border-black bg-gray-50 p-8">
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: `'${FONTS.merriweather}', serif` }}>{item.mainPoint}</div>
              <div className="text-lg text-gray-700" style={{ fontFamily: `'${FONTS.merriweather}', serif` }}>{item.description}</div>
            </div>
          ))}
        </div>
      )
    },

    // NEON GLOW
    neonGlow: {
      name: 'Neon Glow',
      component: (
        <div className="space-y-8">
          {personalContent.map((item, index) => {
            const neonColors = ['text-cyan-400', 'text-pink-400', 'text-green-400', 'text-yellow-400', 'text-purple-400'];
            const glowColors = ['shadow-cyan-500/50', 'shadow-pink-500/50', 'shadow-green-500/50', 'shadow-yellow-500/50', 'shadow-purple-500/50'];
            const color = neonColors[index % 5];
            const glow = glowColors[index % 5];
            
            return (
              <div key={index} className={`${color} ${glow} text-4xl sm:text-5xl font-bold text-center py-8 rounded-2xl bg-black`} style={{ fontFamily: `'${FONTS.nunito}', sans-serif` }}>
                <div className="mb-4">{item.mainPoint}</div>
                <div className="text-lg text-gray-300" style={{ fontFamily: `'${FONTS.nunito}', sans-serif` }}>{item.description}</div>
              </div>
            );
          })}
        </div>
      )
    },

    // BOLD TYPOGRAPHY
    boldTypography: {
      name: 'Bold Typography',
      component: (
        <div className="space-y-16">
          {personalContent.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl sm:text-8xl font-black text-gray-900 mb-8" style={{ fontFamily: `'${FONTS.cabin}', sans-serif` }}>{item.mainPoint}</div>
              <div className="text-2xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: `'${FONTS.cabin}', sans-serif` }}>{item.description}</div>
            </div>
          ))}
        </div>
      )
    },

    // COLORFUL CARDS
    colorfulCards: {
      name: 'Colorful Cards',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalContent.map((item, index) => {
            const cardColors = [
              'bg-gradient-to-br from-red-400 to-pink-500',
              'bg-gradient-to-br from-blue-400 to-cyan-500',
              'bg-gradient-to-br from-green-400 to-emerald-500',
              'bg-gradient-to-br from-yellow-400 to-orange-500',
              'bg-gradient-to-br from-purple-400 to-indigo-500',
              'bg-gradient-to-br from-pink-400 to-rose-500'
            ];
            return (
              <div key={index} className={`${cardColors[index % 6]} text-white p-8 rounded-2xl`}>
                <div className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: `'${FONTS.signika}', sans-serif` }}>{item.mainPoint}</div>
                <div className="text-base" style={{ fontFamily: `'${FONTS.signika}', sans-serif` }}>{item.description}</div>
              </div>
            );
          })}
        </div>
      )
    },

    // DIAGONAL LAYOUT
    diagonalLayout: {
      name: 'Diagonal Layout',
      component: (
        <div className="space-y-8">
          {personalContent.map((item, index) => (
            <div key={index} className={`transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} bg-white p-8 rounded-2xl shadow-lg`}>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: `'${FONTS.nunito}', sans-serif` }}>{item.mainPoint}</div>
              <div className="text-lg text-gray-600" style={{ fontFamily: `'${FONTS.nunito}', sans-serif` }}>{item.description}</div>
            </div>
          ))}
        </div>
      )
    },

    // CREATIVE LEAFLET
    creativeLeaflet: {
      name: 'Creative Leaflet',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalContent.map((item, index) => {
            const leafletStyles = [
              'bg-gradient-to-br from-red-500 via-pink-500 to-purple-600',
              'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600',
              'bg-gradient-to-br from-green-500 via-emerald-500 to-blue-600',
              'bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600',
              'bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600',
              'bg-gradient-to-br from-pink-500 via-rose-500 to-red-600'
            ];
            return (
              <div key={index} className={`${leafletStyles[index % 6]} text-white p-8 rounded-3xl`}>
                <div className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: `'${FONTS.cabin}', sans-serif` }}>{item.mainPoint}</div>
                <div className="text-base" style={{ fontFamily: `'${FONTS.cabin}', sans-serif` }}>{item.description}</div>
              </div>
            );
          })}
        </div>
      )
    },

    // TECH STARTUP
    techStartup: {
      name: 'Tech Startup',
      component: (
        <div className="space-y-6">
          {personalContent.map((item, index) => {
            const accentColors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'];
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 ${accentColors[index % 6]} rounded-full`}></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: `'${FONTS.signika}', sans-serif` }}>{item.mainPoint}</h3>
                <p className="text-gray-600" style={{ fontFamily: `'${FONTS.publicSans}', sans-serif` }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      )
    },

  };

  const layoutOptions = Object.entries(layouts).map(([key, layout]) => ({
    id: key,
    name: layout.name,
    value: key
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Home Layouts</h1>
          <p className="text-xl text-gray-600">Different ways to display your personal content</p>
        </div>

        {/* Layout Selector */}
        <PillSwitcher
          options={layoutOptions}
          selectedValue={selectedLayout}
          onSelect={setSelectedLayout}
          label="Layout Options"
          className="text-center"
          layout="wrap"
        />

        {/* Selected Layout */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {layouts[selectedLayout as keyof typeof layouts]?.component}
        </div>
      </div>
    </div>
  );
};

export default HomeLayouts;