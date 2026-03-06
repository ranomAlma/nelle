import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

import NORDICMYTHOLOGY from "./pages/NORDICMYTHOLOGY";
import WalterMoers from "./pages/WalterMoers";
import MaRCHEN from "./pages/MÄRCHEN";
import Impressum from "./pages/Impressum";
import faust from "./pages/FAUST";
import mix from "./pages/mix"; 


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
    
      <Route path={"/NORDICMYTHOLOGY"} component={NORDICMYTHOLOGY} />
       <Route path={"/WalterMoers"} component={WalterMoers} />
         <Route path={"/MÄRCHEN"} component={MaRCHEN} />
          <Route path={"/Impressum"} component={Impressum} />
           <Route path={"/FAUST"} component={faust} />
             <Route path={"/mix"} component={mix} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
