import { Alert, RouteDelay, NewsItem, FAQItem, ContactDistrict } from './types';
export const MOCK_ALERTS: Alert[] = [
  {
    id: 'a1',
    message: 'Significant snowfall expected. Please check your route status early tomorrow morning.',
    severity: 'warning',
    date: '2024-05-20T18:00:00Z'
  },
  {
    id: 'a2',
    message: 'All Zone 4 buses are cancelled today due to hazardous road conditions.',
    severity: 'critical',
    date: '2024-05-21T06:30:00Z'
  }
];
export const MOCK_DELAYS: RouteDelay[] = [
  { id: 'd1', routeNumber: 'E12', school: 'Lincoln Elementary', status: 'Delayed', delayMinutes: 15, lastUpdated: '07:45 AM' },
  { id: 'd2', routeNumber: 'S45', school: 'West High School', status: 'Cancelled', lastUpdated: '06:15 AM' },
  { id: 'd3', routeNumber: 'N88', school: 'Riverdale Middle', status: 'Delayed', delayMinutes: 30, lastUpdated: '08:00 AM' },
  { id: 'd4', routeNumber: 'M10', school: 'Central Academy', status: 'On Time', lastUpdated: '08:15 AM' },
  { id: 'd5', routeNumber: 'W22', school: 'Lincoln Elementary', status: 'Delayed', delayMinutes: 10, lastUpdated: '07:55 AM' }
];
export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'New Student Portal Launch',
    summary: 'The transportation portal has been upgraded with real-time tracking features for parents.',
    date: '2024-05-15',
    category: 'Update'
  },
  {
    id: 'n2',
    title: 'Driver Recruitment Drive',
    summary: 'Join our team of professional drivers. Competitive pay and flexible hours available.',
    date: '2024-05-10',
    category: 'Employment'
  }
];
export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'Eligibility',
    question: 'How do I know if my child is eligible for the bus?',
    answer: 'Eligibility is based on the distance between your primary residence and the designated school. Generally, elementary students living more than 1.6km and secondary students living more than 3.2km away are eligible.'
  },
  {
    id: 'f2',
    category: 'Safety',
    question: 'What happens during extreme weather?',
    answer: 'In the event of severe weather, cancellations are announced by 6:30 AM via our website, social media, and local radio stations. If buses are cancelled in the morning, they do not run in the afternoon.'
  },
  {
    id: 'f3',
    category: 'Operations',
    question: 'Can my child bring a large musical instrument on the bus?',
    answer: 'Large items are permitted only if they can be safely stored on the student’s lap or under the seat without obstructing the aisle or taking up another student’s seat.'
  }
];
export const MOCK_CONTACTS: ContactDistrict[] = [
  {
    id: 'c1',
    name: 'North District Office',
    phone: '(555) 900-1000',
    email: 'north@transithub.edu',
    zones: ['Zone 1', 'Zone 2'],
    address: '4500 Northern Blvd, Metro City'
  },
  {
    id: 'c2',
    name: 'South District Office',
    phone: '(555) 900-2000',
    email: 'south@transithub.edu',
    zones: ['Zone 3', 'Zone 4', 'Zone 5'],
    address: '1200 Southern Ave, Metro City'
  }
];