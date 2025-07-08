import { type Abrigo, type ONG, type ApoioJuridico, type Recurso, type FAQ } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchData<T>(endpoint: string): Promise<T[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Falha na requisição para ${endpoint}: Status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getAbrigos = () => fetchData<Abrigo>('/abrigos');
export const getONGs = () => fetchData<ONG>('/ongs');
export const getApoioJuridico = () => fetchData<ApoioJuridico>('/apoiojuridico');
export const getRecursos = () => fetchData<Recurso>('/recursos');
export const getFAQs = () => fetchData<FAQ>('/faq');