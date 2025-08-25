import { useEffect } from "react";

interface BlinkPayButtonProps {
  className?: string;
}

export default function BlinkPayButton({ className = "" }: BlinkPayButtonProps) {
  useEffect(() => {
    // Function to inject custom styles for better theme integration
    const injectCustomStyles = () => {
      const styleId = 'blink-pay-custom-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          #blink-pay-button-container {
            background-color: #1E293B !important;
            border-radius: 0.5rem !important;
          }

          #blink-pay-button-container * {
            font-family: inherit !important;
          }

          #blink-pay-button-container button {
            background-color: #3B82F6 !important;
            border: 1px solid #4B5563 !important;
            color: white !important;
            border-radius: 0.375rem !important;
            transition: all 0.2s ease !important;
          }

          #blink-pay-button-container button:hover {
            background-color: #2563EB !important;
            border-color: #6B7280 !important;
          }

          #blink-pay-button-container input,
          #blink-pay-button-container select {
            background-color: #374151 !important;
            border: 1px solid #4B5563 !important;
            color: white !important;
            border-radius: 0.375rem !important;
          }

          #blink-pay-button-container input:focus,
          #blink-pay-button-container select:focus {
            border-color: #3B82F6 !important;
            outline: none !important;
            box-shadow: 0 0 0 1px #3B82F6 !important;
          }

          #blink-pay-button-container .text,
          #blink-pay-button-container label,
          #blink-pay-button-container span {
            color: #D1D5DB !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Function to initialize the Blink widget
    const initBlinkWidget = () => {
      // Check if BlinkPayButton is available on window
      if (typeof (window as any).BlinkPayButton !== 'undefined') {
        // Inject custom styles first
        injectCustomStyles();

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

    // Load the Blink Pay Button script
    const loadBlinkScript = () => {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src="https://blinkbitcoin.github.io/donation-button.blink.sv/js/blink-pay-button.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://blinkbitcoin.github.io/donation-button.blink.sv/js/blink-pay-button.js';
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
        initBlinkWidget();
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

      // Remove custom styles
      const customStyles = document.getElementById('blink-pay-custom-styles');
      if (customStyles) {
        customStyles.remove();
      }
    };
  }, []);

  return (
    <div className={`${className}`}>
      <div
        id="blink-pay-button-container"
        className="bg-specter-navy rounded-lg p-4 border border-gray-600"
        style={{
          // Custom CSS variables to harmonize with the theme
          '--blink-primary-color': '#3B82F6', // specter-primary blue
          '--blink-secondary-color': '#1E293B', // specter-navy
          '--blink-text-color': '#FFFFFF',
          '--blink-background-color': '#1E293B',
          '--blink-border-color': '#4B5563',
          '--blink-hover-color': '#2563EB'
        } as React.CSSProperties}
      />
    </div>
  );
}
