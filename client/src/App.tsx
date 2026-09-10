import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Desktop from "@/pages/desktop";
import Downloads from "@/pages/downloads";
import Hardware from "@/pages/hardware";
import Vendors from "@/pages/vendors";
import BuildGuide from "@/pages/build-guide";
import Contact from "@/pages/contact";
import Contribute from "@/pages/contribute";
import ContributeDesktop from "@/pages/contribute-desktop";
import ContributeDIY from "@/pages/contribute-diy";
import ContributeOther from "@/pages/contribute-other";
import Donate from "@/pages/donate";
import BrandGuidelines from "@/pages/brand-guidelines";
import Imprint from "@/pages/imprint";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/desktop" component={Desktop} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/hardware" component={Hardware} />
        <Route path="/vendors" component={Vendors} />
        <Route path="/build-guide" component={BuildGuide} />
        <Route path="/contact" component={Contact} />
        <Route path="/contribute" component={Contribute} />
        <Route path="/contribute/desktop" component={ContributeDesktop} />
        <Route path="/contribute/diy" component={ContributeDIY} />
        <Route path="/contribute/other" component={ContributeOther} />
        <Route path="/donate" component={Donate} />
        <Route path="/brand-guidelines" component={BrandGuidelines} />
        <Route path="/imprint" component={Imprint} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
