import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg">
                <Bus className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                TransitHub
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Reliable, safe, and efficient transportation solutions for our school communities. Serving over 50,000 students daily with excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-slate-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-slate-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-slate-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home Page</Link></li>
              <li><Link to="/delays" className="hover:text-primary transition-colors">Delays & Cancellations</Link></li>
              <li><Link to="/parents" className="hover:text-primary transition-colors">Parent Resources</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">School Search</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Bus Eligibility</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Weather Policies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Employment Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Transit Way, Metropolitan City, MC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@transithub.edu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
          <p>© 2024 TransitHub Transportation. All rights reserved.</p>
          <p>Built for Student Safety & Reliability</p>
        </div>
      </div>
    </footer>
  );
}