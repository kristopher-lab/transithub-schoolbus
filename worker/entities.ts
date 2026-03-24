import { IndexedEntity } from "./core-utils";
import type { Alert, RouteDelay, NewsItem, FAQItem, ContactDistrict } from "@shared/types";
import { MOCK_ALERTS, MOCK_DELAYS, MOCK_NEWS, MOCK_FAQS, MOCK_CONTACTS } from "@shared/mock-data";
export class AlertEntity extends IndexedEntity<Alert> {
  static readonly entityName = "alert";
  static readonly indexName = "alerts";
  static readonly initialState: Alert = { id: "", message: "", severity: "info", date: "" };
  static seedData = MOCK_ALERTS;
}
export class DelayEntity extends IndexedEntity<RouteDelay> {
  static readonly entityName = "delay";
  static readonly indexName = "delays";
  static readonly initialState: RouteDelay = { id: "", routeNumber: "", school: "", status: "On Time", lastUpdated: "" };
  static seedData = MOCK_DELAYS;
}
export class NewsEntity extends IndexedEntity<NewsItem> {
  static readonly entityName = "news";
  static readonly indexName = "news_list";
  static readonly initialState: NewsItem = { id: "", title: "", summary: "", date: "", category: "" };
  static seedData = MOCK_NEWS;
}
export class FAQEntity extends IndexedEntity<FAQItem> {
  static readonly entityName = "faq";
  static readonly indexName = "faqs";
  static readonly initialState: FAQItem = { id: "", question: "", answer: "", category: "General" };
  static seedData = MOCK_FAQS;
}
export class ContactEntity extends IndexedEntity<ContactDistrict> {
  static readonly entityName = "contact";
  static readonly indexName = "contacts";
  static readonly initialState: ContactDistrict = { id: "", name: "", phone: "", email: "", zones: [], address: "" };
  static seedData = MOCK_CONTACTS;
}