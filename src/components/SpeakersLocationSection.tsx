
const SpeakersLocationSection = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Half - Speakers Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight">
                Not Just Another
                <span className="block text-bitcoin-orange">Crypto Event</span>
              </h2>
              
              <p className="text-lg md:text-xl font-mono text-text-secondary mb-8">
                India's movement of financial sovereignty
              </p>
              
              <div className="bg-white p-8 rounded-xl border border-border-light">
                <p className="font-mono text-base text-black mb-4">
                  Stay tuned for the speaker line-up!
                </p>
                
                <div className="inline-block bg-bitcoin-orange/10 text-bitcoin-orange px-4 py-2 rounded-full font-mono text-sm font-medium">
                  Revealing Soon!
                </div>
              </div>
            </div>
            
            {/* Speaker Placeholder Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gradient-to-br from-bitcoin-orange/20 to-bitcoin-orange/5 rounded-xl flex items-center justify-center border border-border-light"
                >
                  <div className="w-12 h-12 bg-bitcoin-orange/20 rounded-full flex items-center justify-center">
                    <span className="text-bitcoin-orange text-xl">?</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Half - Location Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight">
                We're coming to
                <span className="block text-bitcoin-orange">Bangalore</span>
              </h2>
              
              <p className="text-lg md:text-xl font-mono text-text-secondary mb-8">
                Where the sharpest minds reside!
              </p>
              
              <div className="bg-white p-8 rounded-xl border border-border-light">
                <p className="font-mono text-base text-bitcoin-orange font-medium mb-2">
                  Venue Details
                </p>
                <p className="font-mono text-sm text-text-secondary">
                  Releasing soon!
                </p>
              </div>
            </div>
            
            {/* Bangalore Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-orange/5 rounded-xl p-8 border border-border-light min-h-64 flex items-center justify-center">
                <img 
                  src="/images/bangalore.jpg"
                  alt="Bangalore cityscape"
                  className="w-full h-full object-cover rounded-lg opacity-80"
                />
              </div>
              
              {/* Floating City Elements */}
              <div className="absolute -top-4 -right-4 bg-bitcoin-orange text-white p-3 rounded-full animate-float">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-bitcoin-orange rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersLocationSection;
