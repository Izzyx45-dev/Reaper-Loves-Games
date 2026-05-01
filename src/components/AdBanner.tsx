import { useEffect, useRef } from 'react';

interface AdBannerProps {
  network?: 'adsterra' | 'propeller' | 'original';
  zoneId: string;
  className?: string;
  format?: '728x90' | '300x250' | '160x600';
}

export default function AdBanner({ 
  network = 'adsterra', 
  zoneId, 
  className = "", 
  format = '728x90' 
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current || !zoneId) return;

    // Clear previous ads in this slot if any
    adRef.current.innerHTML = '';

    const script = document.createElement('script');
    
    if (network === 'adsterra') {
      // Adsterra usage pattern
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      const [width, height] = format.split('x').map(Number);
      
      configScript.innerHTML = `
        atOptions = {
          'key' : '${zoneId}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;
      adRef.current.appendChild(configScript);

      script.type = 'text/javascript';
      script.src = `//www.highperformanceformat.com/${zoneId}/invoke.js`;
    } else if (network === 'propeller') {
      // PropellerAds usage pattern
      script.setAttribute('data-cfasync', 'false');
      script.async = true;
      script.src = `//thubanoa.com/aufe/ndu/dgzh/p/${zoneId}.js`;
    }

    adRef.current.appendChild(script);

    return () => {
      if (adRef.current) adRef.current.innerHTML = '';
    };
  }, [network, zoneId, format]);

  return (
    <div className={`ad-container my-8 overflow-hidden bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex flex-col items-center min-h-[100px] ${className}`}>
      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4 font-mono opacity-50">
        {network.toUpperCase()} SECURE NODE // {zoneId}
      </div>
      <div ref={adRef} className="w-full flex justify-center items-center overflow-hidden">
        {/* Ad script will be injected here */}
      </div>
    </div>
  );
}
