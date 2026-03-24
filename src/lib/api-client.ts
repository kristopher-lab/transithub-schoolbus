import { ApiResponse } from "../../shared/types"
export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const timeout = 10000; // 10s timeout
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(path, { 
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      ...init 
    });
    clearTimeout(id);
    const json = (await res.json()) as ApiResponse<T>;
    if (!res.ok || !json.success) {
      const errorMsg = json.error || `Request failed with status ${res.status}`;
      console.error(`[API ERROR] ${path}:`, json);
      throw new Error(errorMsg);
    }
    if (json.data === undefined) {
      throw new Error('API returned success but no data was provided');
    }
    return json.data;
  } catch (error) {
    clearTimeout(id);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your connection.');
    }
    throw error;
  }
}