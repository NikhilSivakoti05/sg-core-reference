import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountrySelection from "./pages/CountrySelection";
import India from "./pages/India";
import USA from "./pages/USA";
import UK from "./pages/UK";
import Japan from "./pages/Japan";
import Singapore from "./pages/Singapore";
import Canada from "./pages/Canada";
import Mexico from "./pages/Mexico";
import Europe from "./pages/Europe";
import Australia from "./pages/Australia";
import SouthAfrica from "./pages/SouthAfrica";
import AboutUs from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Detail from "./pages/Detail";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountrySelection />} />
          <Route path="/in" element={<India />} />
          <Route path="/us" element={<USA />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/jp" element={<Japan />} />
          <Route path="/sg" element={<Singapore />} />
          <Route path="/ca" element={<Canada />} />
          <Route path="/mx" element={<Mexico />} />
          <Route path="/eu" element={<Europe />} />
          <Route path="/au" element={<Australia />} />
          <Route path="/za" element={<SouthAfrica />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
