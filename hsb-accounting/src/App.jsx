import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  BarChart3, 
  ShieldCheck, 
  Phone, 
  Menu, 
  X, 
  ArrowRight,
  Calculator,
  Calendar,
  Mail,
  ChevronRight
} from 'lucide-react';

const Navigation = ({ isScrolled, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="flex items-center gap-3">
             
             {/* UPDATED: Replaced CSS shapes with Image */}
             <div className="relative w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="HSB Logo" 
                  className="w-full h-full object-contain"
                />
             </div>
             {/* End Update */}

             <div className="flex flex-col">
                <span className={`text-2xl font-bold leading-none ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>HSB</span>
                <span className={`text-[0.65rem] font-medium tracking-wider uppercase ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}>Accounting & Advisory</span>
             </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'About', 'Why Us'].map((item) => (
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
          {['Services', 'About', 'Why Us'].map((item) => (
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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-sky-200 selection:text-sky-900">
      <Navigation isScrolled={isScrolled} scrollToSection={scrollToSection} />

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

      {/* Features/Stats Strip */}
      <div className="bg-white border-y border-slate-100 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div>
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">Accurate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">24/7</p>
              <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">Access</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">Expert</p>
              <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">Advisory</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">Secure</p>
              <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">Data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We specialize in keeping your books pristine so you can make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-sky-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full-Service Bookkeeping</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Complete management of your daily financial transactions. We ensure every penny is accounted for and categorized correctly.
              </p>
              <ul className="space-y-2">
                {[
                  'Transaction Categorization',
                  'Bank Reconciliations',
                  'Monthly Financial Statements'
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
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
                {[
                  'Custom Reporting',
                  'Cash Flow Analysis',
                  'Year-End Preparation'
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advisory & Setup</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Setting up QuickBooks or Xero? Need advice on streamlining expenses? We help you build a solid foundation.
              </p>
              <ul className="space-y-2">
                {[
                  'Software Setup & Training',
                  'Expense Management',
                  'Process Optimization'
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / About Section */}
      <section id="why-us" className="py-24 bg-white overflow-hidden">
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
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Whether you are a startup needing a chart of accounts or an established firm needing monthly reconciliation, 
                our tailored bookkeeping solutions ensure you are audit-ready and stress-free.
              </p>
              <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sky-600 font-bold hover:text-sky-700 flex items-center gap-2 group"
              >
                Let's discuss your needs <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly / Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
                  <p className="text-slate-300 mb-8">
                    Book a free 30-minute discovery call. We'll discuss your current setup and how we can help.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Mail size={20} className="text-sky-400" />
                      <span>contact@hsbaccounting.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <BookOpen size={20} className="text-sky-400" />
                      <span>Specialized in Quickbooks & Xero</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 relative z-10">
                  <p className="text-sm text-slate-400">
                    "The best investment you can make is in your own peace of mind."
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-8 bg-white h-[600px] md:h-auto">
                <div className="w-full h-full flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4 text-center md:text-left">Select a time below:</h4>
                  {/* Calendly Inline Widget */}
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

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <span className="text-2xl font-bold text-slate-800">HSB</span>
               <span className="text-xs font-medium text-slate-500 uppercase tracking-widest border-l border-slate-300 pl-2">Accounting & Advisory</span>
            </div>
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} HSB Accounting & Advisory. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}