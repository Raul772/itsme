import clock from "../../assets/Clock.jpg";
import convergencia from "../../assets/Convergencia.png";
import lumixus from "../../assets/Lumixus.png";
import portifolio from "../../assets/Portifolio.jpg";
import { IWDCData } from "../components/Projects/Window/WindowContentCard/WindowContentCard";

export const Projetos: IWDCData[] = [
  {
    title: "Lumixus Website",
    description:
      'Um site criado durante o "Campeonato de Landing Pages" da Empresa Júnior do curso de Sistemas de Informação da UFVJM, NextStep.',
    tags: ["CSS", "HTML", "JAVASCRIPT", "BOOTSTRAP"],
    img: lumixus,
    href: "https://raul772.github.io/Project-Ferias/",
  },
  {
    title: "Clock",
    description:
      "Um dos primeiros projetos que criei sozinho apenas usando HTML, CSS e JavaScript durante o aprendizado nessas tecnologias!",
    tags: ["CSS", "HTML", "JAVASCRIPT"],
    img: clock,
    href: "https://raul772.github.io/relogio-web/",
  },
  {
    title: "Convergência Léxica",
    description:
      "Um projeto feito durante a disciplina de Inteligência Artificial no curso de Sistemas de Informação da UFVJM. Trata-se da implementação de um modelo de convergência léxica baseada em aprendizado de máquina.",
    tags: ["CSS", "HTML", "JAVASCRIPT", "ELECTRON"],
    img: convergencia,
    href: "https://github.com/Raul772/LexicalConvergence",
  },
  {
    title: "Portifólio",
    description:
      "O site que você está acessando agora! Essa é a versão mais recente do meu portifólio, a qual trabalhei desde o protótipo estudando a estética Y2K. Existem versões mais antigas do meu portifólio, mas, sem dúvidas, essa é a que comunica melhor a minha personalidade!",
    tags: ["CSS", "HTML", "TYPESCRIPT", "REACT"],
    img: portifolio,
    href: "https://github.com/Raul772/itsme",
  },
];
