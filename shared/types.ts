export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export type AlertSeverity = 'info' | 'warning' | 'critical';
export interface Alert {
  id: string;
  message: string;
  severity: AlertSeverity;
  date: string;
}
export type DelayStatus = 'Delayed' | 'Cancelled' | 'On Time';
export interface RouteDelay {
  id: string;
  routeNumber: string;
  school: string;
  status: DelayStatus;
  delayMinutes?: number;
  lastUpdated: string;
}
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Eligibility' | 'Safety' | 'Operations' | 'General';
}
export interface ContactDistrict {
  id: string;
  name: string;
  phone: string;
  email: string;
  zones: string[];
  address: string;
}