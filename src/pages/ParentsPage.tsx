import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, ShieldCheck, GraduationCap, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import type { FAQItem } from '@shared/types';
import { Skeleton } from '@/components/ui/skeleton';
export function ParentsPage() {
  const { data: faqs = [], isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api<FAQItem[]>('/api/faqs'),
  });
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
            Parent <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Everything you need to ensure a smooth, safe journey for your student.
            From eligibility checks to safety protocols.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Eligibility Checker */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-black uppercase italic">Transportation <span className="text-primary">Eligibility</span></h2>
              </div>
              <Card className="border-2 border-slate-100 shadow-xl overflow-hidden">
                <CardHeader className="bg-slate-50 border-b-2 border-slate-100">
                  <CardTitle className="text-xl font-bold">Check Your Address</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input placeholder="Enter your home address..." className="pl-10 h-14 text-lg rounded-xl border-2" />
                    </div>
                    <Button className="h-14 px-8 bg-secondary font-black uppercase italic">Check Now</Button>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    * Results are for the current academic year. Eligibility is subject to change.
                  </p>
                </CardContent>
              </Card>
            </section>
            {/* FAQs */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-black uppercase italic">Frequently Asked <span className="text-primary">Questions</span></h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-2xl" />
                  ))
                ) : (
                  faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border-2 border-slate-100 rounded-2xl px-6 bg-white overflow-hidden shadow-sm">
                      <AccordionTrigger className="text-lg font-bold hover:no-underline text-left py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                )}
              </Accordion>
            </section>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-slate-900 text-white border-none shadow-2xl p-8 rounded-3xl">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-black uppercase italic mb-4">Safety First</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our drivers undergo rigorous background checks and continuous safety training.
              </p>
              <Button className="w-full bg-primary text-slate-900 font-black uppercase italic h-12 group">
                View Safety Policy <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
            <Card className="border-2 border-slate-100 p-8 rounded-3xl">
              <h3 className="text-xl font-black uppercase italic mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-12 font-bold text-slate-700">Student Portal Login</Button>
                <Button variant="outline" className="w-full justify-start h-12 font-bold text-slate-700">Bus Request Form</Button>
                <Button variant="outline" className="w-full justify-start h-12 font-bold text-slate-700">Report an Incident</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}