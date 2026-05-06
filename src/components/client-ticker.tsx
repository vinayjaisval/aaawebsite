const clients = [
  'sbi', 'bank of baroda', 'bank of india', 'bank of maharashtra', 'union bank', 
  'central bank of india', 'canra bank', 'federal bank', 'lic', 'nic', 'CCA', 
  'eesl', 'chips', 'ggem', 'tnega'
];

export function ClientTicker() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Empanelled & Trusted By
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="ticker flex items-center gap-12 px-6">
          {/* Double the array for seamless looping */}
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={`/assets/img/clients/${client.replace(/ /g, '%20')}.png`} 
                alt={client} 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
