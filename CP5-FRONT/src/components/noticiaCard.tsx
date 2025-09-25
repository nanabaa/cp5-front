import React from "react"
import type { PropsWithChildren } from "react"
import type { Noticia } from "../types/Noticia_interface"

interface NoticiaCardProps extends PropsWithChildren {
    noticia: Noticia;
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
    return (
        <div>
            <img src={noticia.imagem} alt={noticia.titulo} />
            <h2>{noticia.titulo}</h2>
            <p>{noticia.Conteudo.slice(0, 50)}...</p>
            <div>
                {noticia.categoria.map((categoria, index) => (
                    <p key={index}>
                        {categoria}
                    </p>
                ))}
            </div>
            <p>{noticia.Data.getDay()}/{noticia.Data.getMonth()}/{noticia.Data.getFullYear()}</p>
        </div>
    )
}
