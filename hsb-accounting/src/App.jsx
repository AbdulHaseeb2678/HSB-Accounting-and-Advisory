import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  BarChart3, 
  ShieldCheck, 
  Phone, 
  Menu, 
  X, 
  Calculator,
  Calendar,
  Mail,
  ChevronRight,
  ArrowRight,
  Quote,
  HelpCircle,
  FileText,
  Lock,
  ChevronDown,
  ChevronUp,
  Clock,
  UserCheck,
  Building2,
  ShoppingBag,
  Laptop,
  Stethoscope,
  Utensils,
  Check
} from 'lucide-react';

/* --- Helper Hook to Remove White Background Programmatically (Kept for Navbar Logo) --- */
const useTransparentImage = (imagePath) => {
  const [transparentUrl, setTransparentUrl] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Threshold for white/light pixels
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // Make transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setTransparentUrl(canvas.toDataURL('image/png'));
    };
  }, [imagePath]);

  return transparentUrl;
};

/* --- WhatsApp Floating Button --- */
const WhatsAppButton = () => {
  const phoneNumber = "923260855711"; 
  const message = "Hi Abdul Haseeb, I am interested in your accounting services";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-green-200 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

/* --- Profile Image Component with Error Handling --- */
const ProfileImage = ({ src }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center border-8 border-slate-50 shadow-xl relative overflow-hidden">
      {!imgError ? (
        <img 
          src={src} 
          alt="Abdul Haseeb" 
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <UserCheck size={80} className="text-slate-300" />
      )}
    </div>
  );
};

const Navigation = ({ isScrolled, scrollToSection, displayLogo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="flex items-center gap-3">
             <div className="relative flex items-center justify-center h-16 w-auto"> 
                {!imgError ? (
                   <img 
                     src={displayLogo}
                     alt="HSB Logo" 
                     className="h-full w-auto object-contain"
                     onError={() => setImgError(true)}
                   />
                ) : (
                   <ShieldCheck className={`h-12 w-12 ${isScrolled ? 'text-sky-600' : 'text-sky-500'}`} />
                )}
             </div>

             <div className="flex flex-col">
                <span className={`text-2xl font-bold leading-none ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>HSB</span>
                <span className={`text-[0.65rem] font-medium tracking-wider uppercase ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}>Accounting & Advisory</span>
             </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'About', 'Why Us', 'FAQ'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className={`text-sm font-medium hover:text-sky-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-sky-200"
          >
            Book a Call
          </button>
        </div>

        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
          {['Services', 'About', 'Why Us', 'FAQ'].map((item) => (
            <button 
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase().replace(' ', '-'));
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-slate-600 font-medium py-2 border-b border-gray-50"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}
            className="bg-sky-600 text-white py-3 rounded-lg font-bold text-center mt-2"
          >
            Book a Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

/* --- FAQ Item Component --- */
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`font-semibold ${isOpen ? 'text-sky-600' : 'text-slate-800'} group-hover:text-sky-600 transition-colors`}>
          {question}
        </span>
        {isOpen ? <ChevronUp size={20} className="text-sky-600" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

/* --- Industry Card Component --- */
const IndustryCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
    <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors">
      <Icon className="text-sky-600 group-hover:text-white transition-colors" size={24} />
    </div>
    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // FILE PATHS (Ensure these files exist in your public folder)
  const originalLogoPath = "/HSB-Accounting-and-Advisory/logo.png";
  const faviconPath = "/HSB-Accounting-and-Advisory/Favicon.png";
  const profilePhotoPath = "/HSB-Accounting-and-Advisory/profile.png"; 

  const transparentLogo = useTransparentImage(originalLogoPath);
  const displayLogo = transparentLogo || originalLogoPath;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const updateFavicon = () => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = `${faviconPath}?v=${new Date().getTime()}`;
      link.type = "image/png"; 
    };

    updateFavicon();
    document.title = "HSB Accounting & Advisory";

    return () => window.removeEventListener('scroll', handleScroll);
  }, [faviconPath]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-sky-200 selection:text-sky-900 relative">
      <Navigation isScrolled={isScrolled} scrollToSection={scrollToSection} displayLogo={displayLogo} />

      <WhatsAppButton />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Now accepting new clients
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Focus on Your Growth, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">
                We'll Handle the Numbers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional bookkeeping and advisory services tailored for modern businesses. Accurate financial records, timely insights, and total peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-sky-200 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Schedule Free Consultation
                <Calendar size={20} className="group-hover:animate-pulse" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-slate-300 flex items-center justify-center gap-2"
              >
                View Services
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Software Expertise */}
      <div className="bg-white border-y border-slate-100 py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted Expertise In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-slate-600 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>QuickBooks</span>
            <span className="text-xl font-bold text-slate-600 flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Xero</span>
            <span className="text-xl font-bold text-slate-600 flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div>Wave</span>
            <span className="text-xl font-bold text-slate-600 flex items-center gap-2"><div className="w-2 h-2 bg-green-700 rounded-full"></div>Excel</span>
            <span className="text-xl font-bold text-slate-600 flex items-center gap-2"><div className="w-2 h-2 bg-sky-500 rounded-full"></div>FreshBooks</span>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Accounting isn't one-size-fits-all. We understand the specific financial challenges of your industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard 
              icon={ShoppingBag} 
              title="E-Commerce" 
              description="Inventory tracking, COGS analysis, and multi-channel reconciliation for Shopify/Amazon sellers." 
            />
            <IndustryCard 
              icon={Building2} 
              title="Real Estate" 
              description="Property management accounting, rental income tracking, and expense categorization for investors." 
            />
            <IndustryCard 
              icon={Laptop} 
              title="Tech & Startups" 
              description="Burn rate monitoring, SaaS metrics, and investor-ready financial reporting." 
            />
            <IndustryCard 
              icon={Stethoscope} 
              title="Healthcare" 
              description="Private practice bookkeeping, insurance payment reconciliation, and specialized tax compliance." 
            />
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/3 flex justify-center">
               <ProfileImage src={profilePhotoPath} />
            </div>
            <div className="w-full md:w-2/3">
              <div className="inline-block bg-sky-50 text-sky-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                Meet Your Lead Accountant
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Abdul Haseeb</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                "I started HSB Accounting & Advisory because I saw too many small business owners flying blind. You didn't start your business to stress over spreadsheets. My goal is to give you the clarity and confidence to make big decisions, knowing your numbers are 100% accurate."
              </p>
              <div className="flex gap-6">
                <div>
                   <p className="text-3xl font-bold text-slate-900">5+</p>
                   <p className="text-sm text-slate-500 uppercase tracking-wide">Years Exp.</p>
                </div>
                <div>
                   <p className="text-3xl font-bold text-slate-900">50+</p>
                   <p className="text-sm text-slate-500 uppercase tracking-wide">Clients Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-sky-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full-Service Bookkeeping</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Complete management of your daily financial transactions. We ensure every penny is accounted for and categorized correctly.
              </p>
              <ul className="space-y-2">
                {['Transaction Categorization', 'Bank Reconciliations', 'Monthly Financial Statements'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Reporting</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Clear, actionable reports delivered on time. Understand your Profit & Loss and Balance Sheet at a glance.
              </p>
              <ul className="space-y-2">
                {['Custom Reporting', 'Cash Flow Analysis', 'Year-End Preparation'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advisory & Setup</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Setting up QuickBooks or Xero? Need advice on streamlining expenses? We help you build a solid foundation.
              </p>
              <ul className="space-y-2">
                {['Software Setup & Training', 'Expense Management', 'Process Optimization'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process / How It Works Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Getting started with a new accountant shouldn't be a headache.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200 -z-10"></div>

            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-sky-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Discovery Call</h3>
              <p className="text-slate-600 text-sm px-6">We chat for 15-30 minutes to understand your business needs and ensure we're a perfect fit.</p>
            </div>

            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Onboarding</h3>
              <p className="text-slate-600 text-sm px-6">Securely share your documents. We set up your software and clean up any past mess.</p>
            </div>

            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Monthly Reports</h3>
              <p className="text-slate-600 text-sm px-6">Relax. You receive accurate financial statements every month, on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / About Section */}
      <section id="why-us" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-6">HSB Standard</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Precision</h4>
                      <p className="text-slate-400 text-sm">We treat your data with the highest level of accuracy and confidentiality.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Responsiveness</h4>
                      <p className="text-slate-400 text-sm">We are always just a call or email away when you have questions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Partner in Financial Success</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At <span className="font-semibold text-sky-700">HSB Accounting & Advisory</span>, we understand that behind every number is a business decision. 
                We don't just record history; we help you write the future of your business.
              </p>
              <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sky-600 font-bold hover:text-sky-700 flex items-center gap-2 group mt-4"
              >
                Let's discuss your needs <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - UPDATED TO BE MORE PROFESSIONAL */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-800">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-14 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 rounded-full blur-3xl opacity-10 -mr-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Your Free Strategy Session</h3>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Find out how much time and money you can save. We'll discuss your unique situation and provide an immediate roadmap.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-900/50 flex items-center justify-center flex-shrink-0 border border-sky-800">
                        <Check size={20} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">30-Min Expert Consultation</h4>
                        <p className="text-slate-400 text-sm">No sales pressure, just actionable advice.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-900/50 flex items-center justify-center flex-shrink-0 border border-sky-800">
                        <Check size={20} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Software Setup & Cleanup Review</h4>
                        <p className="text-slate-400 text-sm">We'll assess your current Xero/QuickBooks health.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-900/50 flex items-center justify-center flex-shrink-0 border border-sky-800">
                        <Check size={20} className="text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Tax Efficiency Check</h4>
                        <p className="text-slate-400 text-sm">Identify immediate deduction opportunities.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col sm:flex-row gap-6 mb-6">
                      <a href="mailto:contact@hsbaccounting.com" className="flex items-center gap-3 text-white hover:text-sky-400 transition-colors group">
                        <Mail size={20} className="text-sky-500 group-hover:animate-bounce" />
                        <span>contact@hsbaccounting.com</span>
                      </a>
                    </div>
                    
                    {/* Trust Badge Area */}
                    <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg w-fit border border-slate-700">
                      <ShieldCheck size={18} className="text-green-400" />
                      <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">Certified Partner: QuickBooks & Xero</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-8 bg-white h-[650px] md:h-auto flex flex-col justify-center">
                <div className="w-full h-full max-h-[600px] flex flex-col">
                  <div className="flex-grow w-full relative">
                    <iframe
                      src="https://calendly.com/abdulhbwork/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Select a Date & Time - Calendly"
                      style={{ minHeight: '500px' }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - MOVED BELOW CONTACT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl relative shadow-sm border border-slate-100">
              <Quote className="text-sky-200 absolute top-4 right-4" size={40} />
              <p className="text-slate-600 mb-6 italic">"HSB transformed our chaotic books into a streamlined system. For the first time, I actually understand my profit margins."</p>
              <div>
                <p className="font-bold text-slate-900">Sarah J.</p>
                <p className="text-sm text-slate-500">E-commerce Founder</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl relative shadow-sm border border-slate-100">
              <Quote className="text-sky-200 absolute top-4 right-4" size={40} />
              <p className="text-slate-600 mb-6 italic">"Incredible attention to detail. Abdul spotted deductions I didn't even know existed. Highly recommended."</p>
              <div>
                <p className="font-bold text-slate-900">Michael R.</p>
                <p className="text-sm text-slate-500">Marketing Agency Owner</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl relative shadow-sm border border-slate-100 md:col-span-2 lg:col-span-1">
              <Quote className="text-sky-200 absolute top-4 right-4" size={40} />
              <p className="text-slate-600 mb-6 italic">"Professional, responsive, and easy to work with. Moving our accounting to HSB was the best decision we made this year."</p>
              <div>
                <p className="font-bold text-slate-900">David K.</p>
                <p className="text-sm text-slate-500">Real Estate Investor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - MOVED BELOW CONTACT */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-100 p-8">
            <FAQItem 
              question="What accounting software do you work with?"
              answer="We primarily work with QuickBooks Online and Xero, as they offer the best cloud-based features for modern businesses. However, we are also experienced with Wave, FreshBooks, and Excel-based systems."
            />
            <FAQItem 
              question="Do you work with startups?"
              answer="Absolutely. We love helping startups set up their financial foundation correctly from day one. We can help you choose the right entity structure, software, and chart of accounts."
            />
            <FAQItem 
              question="How do I share my documents with you?"
              answer="We use secure, encrypted client portals for all document sharing. You can simply upload receipts and statements from your phone or computer. We prioritize data security above all else."
            />
            <FAQItem 
              question="What is the difference between bookkeeping and advisory?"
              answer="Bookkeeping is the accurate recording of your day-to-day transactions. Advisory is using that data to help you plan for the future—budgeting, cash flow forecasting, and strategic growth planning."
            />
          </div>
        </div>
      </section>

      {/* Footer with Legal Links */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-2xl font-bold text-slate-800">HSB</span>
                 <span className="text-xs font-medium text-slate-500 uppercase tracking-widest border-l border-slate-300 pl-2">Accounting & Advisory</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs">
                Empowering businesses with financial clarity and strategic insights.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Bookkeeping</li>
                <li>Financial Reporting</li>
                <li>Advisory</li>
                <li>Software Setup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="hover:text-sky-600 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-sky-600 cursor-pointer">Terms of Service</li>
                <li className="hover:text-sky-600 cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} HSB Accounting & Advisory. All rights reserved.
            </div>
            <div className="flex gap-4">
               {/* Social placeholders could go here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}