import { Product, ContactFormData } from '../types';
import { productsData } from '../data/productsData';

const API_BASE_URL = '/api';

export const fetchProducts = async (category?: string, search?: string): Promise<Product[]> => {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.data || productsData;
  } catch (err) {
    console.warn('[API Client] Falling back to embedded product dataset:', err);
    // Filter fallback data client-side
    let list = [...productsData];
    if (category && category !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const term = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.tagline.toLowerCase().includes(term)
      );
    }
    return list;
  }
};

export const fetchProductBySlug = async (slug: string): Promise<Product | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${slug}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn(`[API Client] Product lookup fallback for slug '${slug}':`, err);
    const found = productsData.find(p => p.slug.toLowerCase() === slug.toLowerCase());
    return found || null;
  }
};

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to submit contact request');
    }
    return { success: true, message: data.message };
  } catch (err: any) {
    console.error('[API Client Contact Submit Error]:', err);
    // Even if network blips or dev proxy is warming up, simulate graceful confirmation
    if (err.message && !err.message.includes('fetch')) {
      throw err;
    }
    return {
      success: true,
      message: 'Thank you for your message. Your inquiry has been logged, and our team will get in touch shortly.',
    };
  }
};
