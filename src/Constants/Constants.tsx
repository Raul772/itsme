import convergencia from "../../assets/Convergencia.png";
import lumixus from "../../assets/Lumixus.png";
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
    title: "VLConnect",
    description:
      "Um app React Native para controle remoto do VLC Media Player via rede local.",
    tags: ["REACTNATIVE", "TYPESCRIPT"],
    href: "https://github.com/Raul772/VLConnect",
  },
  {
    title: "Optify",
    description:
      "O Optify é um aplicativo desenvolvido para ajudar a melhorar a saúde e o bem-estar no ambiente de trabalho ou estudo, lembrando os usuários de pausas regulares, se hidratarem e sobre a regra 20-20-20.",
    tags: ["PYTHON"],
    href: "https://github.com/Raul772/Optify",
  },
  {
    title: "Convergência Léxica",
    description:
      "Um projeto feito durante a disciplina de Inteligência Artificial no curso de Sistemas de Informação da UFVJM. Trata-se da implementação de um modelo de convergência léxica baseada em aprendizado de máquina.",
    tags: ["CSS", "HTML", "JAVASCRIPT", "ELECTRON"],
    img: convergencia,
    href: "https://github.com/Raul772/LexicalConvergence",
  },
];
