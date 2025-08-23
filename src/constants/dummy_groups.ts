import type { Group } from "../types";

export const DUMMY_GROUPS: Group[] = [
  {
    id: "1",
    name: 'Grupo Alpha',
    members: [
      { name: 'João Silva', linkedin: 'https://www.linkedin.com/in/joaosilva' },
      { name: 'Maria Santos', linkedin: 'https://www.linkedin.com/in/mariasantos' },
      { name: 'Pedro Lima', linkedin: 'https://www.linkedin.com/in/pedrolima' },
    ],
    project: {
      name: 'EcoTrack: Gestão de Resíduos Inteligente',
      summary: 'Uma plataforma web que ajuda empresas a monitorar e otimizar a gestão de seus resíduos, promovendo a sustentabilidade e a redução de custos.',
      repositoryLink: 'https://github.com/grupo-alpha/ecotrack',
      pitchLink: 'https://www.youtube.com/watch?v=pitch_ecotrack',
    },
  },
  {
    id: "2",
    name: 'Grupo Beta',
    members: [
      { name: 'Ana Souza', linkedin: 'https://www.linkedin.com/in/anasouza' },
      { name: 'Carlos Oliveira', linkedin: 'https://www.linkedin.com/in/carlosoliveira' },
    ],
    project: {
      name: 'HelpDesk Pro: Otimização de Atendimento ao Cliente',
      summary: 'Um sistema de helpdesk que utiliza IA para categorizar e priorizar tickets de suporte, melhorando a eficiência e a satisfação do cliente.',
      repositoryLink: 'https://github.com/grupo-beta/helpdesk-pro',
      pitchLink: 'https://www.youtube.com/watch?v=pitch_helpdeskpro',
    },
  },
  {
    id: "3",
    name: 'Grupo Gama',
    members: [
      { name: 'Lucas Ferreira', linkedin: 'https://www.linkedin.com/in/lucasferreira' },
      { name: 'Fernanda Costa', linkedin: 'https://www.linkedin.com/in/fernandacosta' },
      { name: 'Ricardo Pires', linkedin: 'https://www.linkedin.com/in/ricardopires' },
      { name: 'Beatriz Martins', linkedin: 'https://www.linkedin.com/in/beatrizmartins' },
    ],
    project: {
      name: 'Marketlytics: Análise de Mercado Automatizada',
      summary: 'Ferramenta de análise de mercado que coleta dados de diversas fontes e gera relatórios interativos para ajudar empresas a tomar decisões estratégicas.',
      repositoryLink: 'https://github.com/grupo-gama/marketlytics',
      pitchLink: 'https://www.youtube.com/watch?v=pitch_marketlytics',
    },
  },
];
