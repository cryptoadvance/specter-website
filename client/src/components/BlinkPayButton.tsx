import { useEffect } from "react";

interface BlinkPayButtonProps {
  className?: string;
}

export default function BlinkPayButton({ className = "" }: BlinkPayButtonProps) {
  useEffect(() => {
    // Function to initialize the Blink widget
    const initBlinkWidget = () => {
      if (typeof (window as any).BlinkPayButton !== 'undefined') {
        (window as any).BlinkPayButton.init({
          username: 'specterassociation',
          containerId: 'blink-pay-button-container',
          themeMode: 'dark',
          language: 'en',
          defaultAmount: 1000,
          supportedCurrencies: [
            {
              "code": "sats",
              "name": "sats",
              "isCrypto": true
            },
            {
              "code": "USD",
              "name": "USD",
              "isCrypto": false
            }
          ],
          debug: false
        });
      } else {
        // Try again in 100ms if BlinkPayButton isn't loaded yet
        setTimeout(initBlinkWidget, 100);
      }
    };

    // Load the local Blink Pay Button script
    const loadBlinkScript = () => {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src*="blink-pay-button.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = '/src/assets/blink-pay-button.js'; // Local path
        script.async = true;
        
        script.onload = () => {
          // Initialize widget when script is loaded
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initBlinkWidget);
          } else {
            initBlinkWidget();
          }
        };
        
        script.onerror = () => {
          console.error('Failed to load Blink Pay Button script');
        };
        
        document.head.appendChild(script);
      } else {
        // Script already exists, just initialize
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initBlinkWidget);
        } else {
          initBlinkWidget();
        }
      }
    };

    loadBlinkScript();

    // Cleanup function
    return () => {
      // Remove the container content when component unmounts
      const container = document.getElementById('blink-pay-button-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={className}>
      <div id="blink-pay-button-container"></div>
    </div>
  );
}
