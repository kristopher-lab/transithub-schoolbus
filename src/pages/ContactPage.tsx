import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import type { ContactDistrict } from '@shared/types';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => api<ContactDistrict[]>('/api/contacts'),
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api('/api/contact-inquiry', { method: 'POST', body: JSON.stringify({ message: 'test' }) });
      setSubmitted(true);
      toast.success('Inquiry sent successfully');
    } catch (err) {
      toast.error('Failed to send inquiry');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20 animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
          Contact <span className="text-primary">Transportation</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're here to help. Reach out to our regional offices or use the contact form below for general inquiries.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-secondary p-3 rounded-xl">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black uppercase italic">Send a <span className="text-primary">Message</span></h2>
          </div>
          <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-xl min-h-[500px] flex flex-col justify-center">
            {submitted ? (
              <div className="text-center space-y-6 animate-in zoom-in-95">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black uppercase italic">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. A transportation specialist will contact you shortly.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="font-bold uppercase tracking-widest text-xs">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="font-bold uppercase text-xs tracking-widest">First Name</Label>
                    <Input id="first-name" placeholder="John" required className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="font-bold uppercase text-xs tracking-widest">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold uppercase text-xs tracking-widest">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold uppercase text-xs tracking-widest">How can we help?</Label>
                  <Textarea id="message" placeholder="Details of your inquiry..." required className="min-h-[150px] rounded-xl" />
                </div>
                <Button disabled={isSubmitting} className="w-full h-14 bg-secondary font-black uppercase italic group">
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </section>
        {/* District Directory */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-slate-900" />
            </div>
            <h2 className="text-3xl font-black uppercase italic">Regional <span className="text-primary">Offices</span></h2>
          </div>
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full rounded-3xl" />
              ))
            ) : (
              contacts.map((contact) => (
                <Card key={contact.id} className="border-2 border-slate-100 hover:border-primary transition-colors shadow-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-black uppercase italic mb-6">{contact.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600">
                          <Phone className="w-5 h-5 text-primary" />
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <Mail className="w-5 h-5 text-primary" />
                          <span className="font-bold">{contact.email}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 text-slate-600">
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{contact.address}</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                      {contact.zones.map(zone => (
                        <span key={zone} className="bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          {zone}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}