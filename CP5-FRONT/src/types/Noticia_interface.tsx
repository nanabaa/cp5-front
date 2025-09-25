import type { PropsWithChildren } from "react";

export interface Noticia extends PropsWithChildren{
    id: number,
    titulo: string,
    Data: Date,
    Conteudo: string,
    imagem: string,
    categoria: string[],
    comentario: Comentario[],
}

export interface Comentario{
    nome: string,
    texto: string,
}