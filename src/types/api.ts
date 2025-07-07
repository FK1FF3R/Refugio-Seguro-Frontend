// src/types/api.ts

export interface Abrigo {
  id: string;
  nome: string;
  estado: string;
  cidade: string;
  endereco: string;
  telefone: string;
  publico: string;
  capacidade: number;
  tipo: string;
}

export interface ONG {
  id: string;
  nome: string;
  missao: string;
  contatos: { telefone: string; email: string; };
  areaAtuacao: string[];
  redesSociais: { site: string; facebook: string; instagram: string; };
}

export interface ApoioJuridico {
  id: string;
  nome: string;
  estado: string;
  cidade: string;
  tipoServico: string;
  disponivel: boolean;
  telefone: string;
  endereco: string;
  horarioFuncionamento: string;
}

export interface Recurso {
    id: string;
    titulo: string;
    url: string;
    tipo: string;
    descricao: string;
    publicoAlvo: string;
    idioma: string;
    tags: string[];
}

export interface FAQ {
    id: number;
    pergunta: string;
    resposta: string;
}