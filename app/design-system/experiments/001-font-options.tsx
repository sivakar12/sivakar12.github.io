'use client';

import { useState, useEffect } from 'react';
import PillSwitcher from '@/components/PillSwitcher';

// Font tiers for categorization while keeping behavior the same
export const FONT_TIER_GREAT = [
  'Besley',
  'Signika',
  'National Park',
  'Nunito',
  'Cabin',
  'Lato',
  'Merriweather',
  'Public Sans',
  'Domine',
  'Gelasio',
];

export const FONT_TIER_OK = [
  'Sniglet',
  'Barlow',
  'Winky Sans',
  'Crimson Text',
  'Lora',
  'Libre Baskerville',
  'EB Garamond',
  'Arvo',
  'Commissioner',
  'Open Sans',
  'Work Sans',
  'Nunito Sans',
];

export const FONT_TIER_WONT_FIT = [
  'Varela Round',
  'Outfit',
  'Fredoka',
  'Alan Sans',
  'Signika Nagative',
  'Dosis',
  'Comfortaa',
  'Poppins',
  'Raleway',
  'Noto',
];

const FONT_OPTIONS = [
  ...FONT_TIER_GREAT,
  ...FONT_TIER_OK,
  ...FONT_TIER_WONT_FIT,
];

export default function FontOptionsExperiment() {
  const [selectedFont, setSelectedFont] = useState('Signika');

  useEffect(() => {
    // Load Google Fonts dynamically - Option 1: Individual font links
    FONT_OPTIONS.forEach(font => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@400;600;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
    
    return () => {
      // Clean up links when component unmounts
      const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  const fontCategories = {
    'Great': FONT_TIER_GREAT.map(font => ({
      id: `great-${font}`,
      name: font,
      value: font,
      style: { fontFamily: `'${font}', sans-serif` }
    })),
    'OK': FONT_TIER_OK.map(font => ({
      id: `ok-${font}`,
      name: font,
      value: font,
      style: { fontFamily: `'${font}', sans-serif` }
    })),
    "Won't fit": FONT_TIER_WONT_FIT.map(font => ({
      id: `wont-${font}`,
      name: font,
      value: font,
      style: { fontFamily: `'${font}', sans-serif` }
    }))
  };

  return (
    <div className="space-y-8">
      {/* Font Selection Pills by Tiers */}
      <PillSwitcher
        options={[]}
        selectedValue={selectedFont}
        onSelect={setSelectedFont}
        showCategories={true}
        categories={fontCategories}
        layout="wrap"
        size="md"
      />

      {/* Big Gradient Banner Preview */}
      <div className="py-12 text-center">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
          style={{ fontFamily: `'${selectedFont}', sans-serif` }}
        >
          Sivakar
        </h1>
      </div>

      {/* Content with Selected Font */}
      <div style={{ fontFamily: `'${selectedFont}', sans-serif` }} className="space-y-8">
        {/* Home Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 border">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="text-lg font-semibold mb-2">Lifelong Learner</h4>
            <p className="text-gray-600 leading-relaxed">
              Always learning something new with intensity. The compound effect of learning something new every day is immense.
            </p>
          </div>
          <div className="p-6 border">
            <div className="text-3xl mb-3">💻</div>
            <h4 className="text-lg font-semibold mb-2">Software Engineer</h4>
            <p className="text-gray-600 leading-relaxed">
              Proficient in all aspects of computer science, encompassing theory, languages, tools, and practices.
            </p>
          </div>
          <div className="p-6 border">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="text-lg font-semibold mb-2">Voracious Reader</h4>
            <p className="text-gray-600 leading-relaxed">
              I read many hours a day and have read hundreds of books on diverse subjects, aspiring to be a polymath.
            </p>
          </div>
        </div>

        {/* Blog Post */}
        <div className="p-6 border">
          <h4 className="text-xl font-bold mb-3">Flow State</h4>
          <p className="leading-relaxed">
            Flow state is the antidote to all my weaknesses that get in the way of me collecting all the skills and knowledge I have now.
          </p>
          <p className="leading-relaxed mt-3">
            My weaknesses are aplenty. I am lazy. I daydream. I don't like to follow timetables. I am easily distracted and very often go down the Internet rabbit hole. There are voices that tell me all the way things will go wrong. Despite all of these, I can be super productive for hours at a stretch and that is how I have, well, what I have.
          </p>
          <p className="leading-relaxed mt-3">
            Mihaly Csikszentmihaly gave it this name and popularized it as a concept. I knew this feeling before I heard about this man who's name I can't pronounce but he is the one named it and you and I can talk about this easily.
          </p>
        </div>

        {/* CS Note */}
        <div className="p-6 border">
          <h4 className="text-lg font-semibold mb-3">React</h4>
          <div className="space-y-2">
            <p><strong>What is React?</strong></p>
            <p>• A JavaScript library that makes it easy to render HTML elements based on view state</p>
            <p className="mt-3"><strong>How it works:</strong></p>
            <p>• There is one root component that have many components</p>
            <p>• A component may have state, which are passed to children any level deep as props</p>
            <p>• Props are managed as function variables</p>
            <p>• React executes all components rendering steps to make a DOM tree and render</p>
            <p>• Updates to state has to happen through the React runtime</p>
            <p>• When state changes, React creates another whole render in memory but no DOM update</p>
            <p>• Compares snapshots of old DOM state and new DOM state efficiently</p>
            <p>• Updates the parts of DOM that has to change</p>
          </div>
        </div>
      </div>
    </div>
  );
}
