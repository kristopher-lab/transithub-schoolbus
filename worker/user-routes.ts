import { Hono } from "hono";
import type { Env } from './core-utils';
import { AlertEntity, DelayEntity, NewsEntity, FAQEntity, ContactEntity } from "./entities";
import { ok, bad } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // ALERTS
  app.get('/api/alerts', async (c) => {
    try {
      await AlertEntity.ensureSeed(c.env);
      const page = await AlertEntity.list(c.env, null, 100);
      return ok(c, page.items);
    } catch (e) {
      return bad(c, e instanceof Error ? e.message : 'Failed to fetch alerts');
    }
  });
  // DELAYS
  app.get('/api/delays', async (c) => {
    try {
      await DelayEntity.ensureSeed(c.env);
      const page = await DelayEntity.list(c.env, null, 1000);
      return ok(c, page.items);
    } catch (e) {
      return bad(c, e instanceof Error ? e.message : 'Failed to fetch delays');
    }
  });
  // NEWS
  app.get('/api/news', async (c) => {
    try {
      await NewsEntity.ensureSeed(c.env);
      const page = await NewsEntity.list(c.env, null, 20);
      return ok(c, page.items);
    } catch (e) {
      return bad(c, e instanceof Error ? e.message : 'Failed to fetch news');
    }
  });
  // FAQS
  app.get('/api/faqs', async (c) => {
    try {
      await FAQEntity.ensureSeed(c.env);
      const page = await FAQEntity.list(c.env, null, 100);
      return ok(c, page.items);
    } catch (e) {
      return bad(c, e instanceof Error ? e.message : 'Failed to fetch faqs');
    }
  });
  // CONTACTS
  app.get('/api/contacts', async (c) => {
    try {
      await ContactEntity.ensureSeed(c.env);
      const page = await ContactEntity.list(c.env, null, 50);
      return ok(c, page.items);
    } catch (e) {
      return bad(c, e instanceof Error ? e.message : 'Failed to fetch contacts');
    }
  });
  // MOCK FORM SUBMISSION
  app.post('/api/contact-inquiry', async (c) => {
    return ok(c, { message: 'Inquiry received successfully' });
  });
}