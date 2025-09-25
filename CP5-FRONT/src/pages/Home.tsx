import React from 'react';
import { NoticiaCard } from '../components/noticiaCard';
import type { Noticia } from '../types/Noticia_interface';


const noticiasDeExemplo: Noticia[] = [
    {
        id: 1,
        titulo: "Novidades do TypeScript",
        Data: new Date('2023-04-20'),
        Conteudo: "O TypeScript 5.0 foi lançado com diversas melhorias e novas funcionalidades, tornando o desenvolvimento ainda mais robusto e seguro.",
        imagem: "",
        categoria: ["Programação", "Tecnologia"],
        comentario: [],
    },
    {
        id: 2,
        titulo: "Desenvolvimento de Aplicações Web",
        Data: new Date('2023-04-18'),
        Conteudo: "Entenda os principais frameworks e bibliotecas para o desenvolvimento de aplicações web modernas, como React, Angular e Vue.",
        imagem: "",
        categoria: ["Web", "Frameworks"],
        comentario: [],
    },
    {
        id: 3,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 4,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 5,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 6,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 7,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 8,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 9,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    },
    {
        id: 10,
        titulo: "Inteligência Artificial em alta",
        Data: new Date('2023-04-15'),
        Conteudo: "A inteligência artificial está transformando a forma como interagimos com a tecnologia, impulsionando a inovação em diversas áreas.",
        imagem: "",
        categoria: ["IA", "Inovação"],
        comentario: [],
    }
];
const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Últimas Notícias</h1>
            </header>
            <main className="noticias-list">
                {noticiasDeExemplo.map((noticia) => (
                    <NoticiaCard key={noticia.id} noticia={noticia} />
                ))}
            </main>
        </div>
    );
}
export default Home