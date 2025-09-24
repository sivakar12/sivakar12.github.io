export default function FontOptionsExperiment() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Font Options Experiment
        </h2>
        <p className="text-lg text-gray-600">
          Testing different font combinations and weights for the personal website
        </p>
      </div>

      {/* Typography Scale */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Typography Scale
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Font Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700">Default Font Stack</h4>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
              <h2 className="text-3xl font-semibold text-gray-800">Heading 2</h2>
              <h3 className="text-2xl font-medium text-gray-700">Heading 3</h3>
              <h4 className="text-xl font-medium text-gray-600">Heading 4</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Body text with normal weight and good line height for readability.
              </p>
              <p className="text-sm text-gray-500">
                Small text for captions and secondary information.
              </p>
            </div>
          </div>

          {/* Alternative Font Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700">Alternative Font Stack</h4>
            <div className="space-y-3 font-serif">
              <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
              <h2 className="text-3xl font-semibold text-gray-800">Heading 2</h2>
              <h3 className="text-2xl font-medium text-gray-700">Heading 3</h3>
              <h4 className="text-xl font-medium text-gray-600">Heading 4</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Body text with serif font for a more traditional feel.
              </p>
              <p className="text-sm text-gray-500">
                Small serif text for captions and secondary information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Font Weight Variations */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Font Weight Variations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h4 className="text-lg font-light text-gray-700 mb-3">Light Weight</h4>
            <p className="font-light text-gray-600">
              This is light weight text that feels airy and modern.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h4 className="text-lg font-normal text-gray-700 mb-3">Normal Weight</h4>
            <p className="font-normal text-gray-600">
              This is normal weight text that's easy to read and versatile.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Semibold Weight</h4>
            <p className="font-semibold text-gray-600">
              This is semibold text that draws attention and adds emphasis.
            </p>
          </div>
        </div>
      </section>

      {/* Code Font Testing */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Code Font Testing
        </h3>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <pre className="text-green-400 font-mono text-sm">
            <code>{`// Code font example
function greetUser(name) {
  return \`Hello, \${name}!\`;
}

const message = greetUser("World");
console.log(message);`}</code>
          </pre>
        </div>
      </section>

      {/* Font Pairing Examples */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
          Font Pairing Examples
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">Sans-Serif + Mono</h4>
            <h5 className="text-lg font-semibold text-indigo-800 mb-2">Clean and Modern</h5>
            <p className="text-indigo-700 mb-4">
              Perfect for technical content and modern interfaces.
            </p>
            <code className="bg-indigo-200 text-indigo-900 px-2 py-1 rounded text-sm font-mono">
              const example = "code";
            </code>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg">
            <h4 className="text-xl font-bold text-purple-900 mb-3 font-serif">Serif + Sans</h4>
            <h5 className="text-lg font-semibold text-purple-800 mb-2">Elegant and Readable</h5>
            <p className="text-purple-700 mb-4">
              Great for articles and long-form content with personality.
            </p>
            <span className="bg-purple-200 text-purple-900 px-2 py-1 rounded text-sm">
              Sans-serif accent
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
