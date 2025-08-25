import { Switch, Route } from "wouter";
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
import Imprint from "@/pages/imprint";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/desktop" component={Desktop} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/hardware" component={Hardware} />
      <Route path="/vendors" component={Vendors} />
      <Route path="/build-guide" component={BuildGuide} />
      <Route path="/contact" component={Contact} />
      <Route path="/imprint" component={Imprint} />
      <Route component={NotFound} />
    </Switch>
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
