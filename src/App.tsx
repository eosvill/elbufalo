import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AutomationBanner from './components/AutomationBanner';
// import WorkGallery from './components/WorkGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-corporate-sky selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <AutomationBanner />
        {/* <WorkGallery /> */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
