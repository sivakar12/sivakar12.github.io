export default function CardPaddingExperiment() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Card Padding Experiment
        </h2>
        <p className="text-lg text-gray-600">
          Testing different padding and spacing options for card components
        </p>
      </div>

      {/* Padding Scale */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Padding Scale
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">p-2 (8px)</h4>
            <p className="text-xs text-gray-600">Very tight padding</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">p-3 (12px)</h4>
            <p className="text-xs text-gray-600">Compact padding</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">p-4 (16px)</h4>
            <p className="text-xs text-gray-600">Standard padding</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">p-5 (20px)</h4>
            <p className="text-xs text-gray-600">Comfortable padding</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">p-6 (24px)</h4>
            <p className="text-xs text-gray-600">Generous padding</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">p-8 (32px)</h4>
            <p className="text-xs text-gray-600">Spacious padding</p>
          </div>
        </div>
      </section>

      {/* Asymmetric Padding */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Asymmetric Padding
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">px-6 py-3</h4>
            <p className="text-xs text-gray-600">Wide horizontal, compact vertical</p>
          </div>
          
          <div className="bg-white px-3 py-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">px-3 py-6</h4>
            <p className="text-xs text-gray-600">Compact horizontal, generous vertical</p>
          </div>
          
          <div className="bg-white px-8 py-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">px-8 py-4</h4>
            <p className="text-xs text-gray-600">Extra wide horizontal, standard vertical</p>
          </div>
          
          <div className="bg-white px-4 py-8 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">px-4 py-8</h4>
            <p className="text-xs text-gray-600">Standard horizontal, spacious vertical</p>
          </div>
          
          <div className="bg-white pl-6 pr-4 py-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">pl-6 pr-4 py-5</h4>
            <p className="text-xs text-gray-600">More left padding for alignment</p>
          </div>
          
          <div className="bg-white pt-6 pb-4 px-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-sm font-medium text-gray-700 mb-2">pt-6 pb-4 px-5</h4>
            <p className="text-xs text-gray-600">More top padding for emphasis</p>
          </div>
        </div>
      </section>

      {/* Content Density Comparison */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Content Density Comparison
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compact Density */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700">Compact Density</h4>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="text-base font-semibold text-gray-900 mb-1">Project Title</h5>
              <p className="text-sm text-gray-600 mb-2">Brief description of the project and its main features.</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Standard Density */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700">Standard Density</h4>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="text-base font-semibold text-gray-900 mb-2">Project Title</h5>
              <p className="text-sm text-gray-600 mb-3">Brief description of the project and its main features.</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Spacious Density */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700">Spacious Density</h4>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="text-base font-semibold text-gray-900 mb-3">Project Title</h5>
              <p className="text-sm text-gray-600 mb-4">Brief description of the project and its main features.</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Extra Spacious Density */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700">Extra Spacious Density</h4>
            <div className="bg-white p-12 rounded-lg border border-gray-200 shadow-sm">
              <h5 className="text-base font-semibold text-gray-900 mb-4">Project Title</h5>
              <p className="text-sm text-gray-600 mb-5">Brief description of the project and its main features.</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile vs Desktop Padding */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Responsive Padding
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-base font-semibold text-gray-900 mb-2">Responsive Card</h4>
            <p className="text-sm text-gray-600 mb-3">
              p-4 on mobile, p-6 on desktop. Adapts to screen size.
            </p>
            <div className="text-xs text-gray-500">
              Mobile: 16px padding<br/>
              Desktop: 24px padding
            </div>
          </div>
          
          <div className="bg-white px-3 py-4 md:px-6 md:py-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-base font-semibold text-gray-900 mb-2">Responsive Asymmetric</h4>
            <p className="text-sm text-gray-600 mb-3">
              Different responsive values for x and y padding.
            </p>
            <div className="text-xs text-gray-500">
              Mobile: 12px x, 16px y<br/>
              Desktop: 24px x, 24px y
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Padding Test */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Interactive Padding Test
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:p-6 transition-all duration-200">
            <h4 className="text-base font-semibold text-blue-900 mb-2">Hover to Expand</h4>
            <p className="text-sm text-blue-700">
              Hover over this card to see the padding expand smoothly.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 hover:p-8 transition-all duration-300">
            <h4 className="text-base font-semibold text-green-900 mb-2">Slow Transition</h4>
            <p className="text-sm text-green-700">
              This card has a slower transition for a more elegant effect.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200 hover:px-8 hover:py-6 transition-all duration-150">
            <h4 className="text-base font-semibold text-purple-900 mb-2">Asymmetric Hover</h4>
            <p className="text-sm text-purple-700">
              Hover changes horizontal and vertical padding differently.
            </p>
          </div>
        </div>
      </section>

      {/* Padding with Content Types */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Padding for Different Content Types
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Article Card</h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Article cards need generous padding for readability. The content should breathe and feel comfortable to read.
            </p>
            <div className="text-xs text-gray-500">
              p-6 (24px) - Good for text content
            </div>
          </div>

          {/* Project Card */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-full h-24 bg-gray-100 rounded mb-3"></div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Project Card</h4>
            <p className="text-sm text-gray-600 mb-3">
              Compact padding works well for project cards with images.
            </p>
            <div className="text-xs text-gray-500">
              p-4 (16px) - Compact for image-heavy content
            </div>
          </div>

          {/* Navigation Item */}
          <div className="bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-base font-semibold text-gray-900 mb-1">Navigation Item</h4>
            <p className="text-xs text-gray-600">
              Minimal padding for navigation elements.
            </p>
            <div className="text-xs text-gray-500 mt-2">
              px-4 py-3 - Minimal for nav items
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4"></div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Feature Card</h4>
            <p className="text-sm text-gray-600">
              Generous padding for feature highlights and call-to-actions.
            </p>
            <div className="text-xs text-gray-500 mt-3">
              p-8 (32px) - Spacious for emphasis
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
