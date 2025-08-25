import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showNewsletter?: boolean;
  onHomeClick?: () => void; // For home page scroll functionality
  className?: string; // Allow custom styling for the main container
}

export default function Layout({ 
  children, 
  showNewsletter = false, 
  onHomeClick,
  className = "bg-specter-dark text-white font-sans"
}: LayoutProps) {
  return (
    <div className={className}>
      <Header onHomeClick={onHomeClick} />
      {children}
      <Footer showNewsletter={showNewsletter} />
    </div>
  );
}
