import type { Group } from "../types";

// No primeiro momento como são apenas 6 grupos, ainda não existe um backend mas
// ao incrementar esse projeto, é essencial implementar um banco de dados para armazenar isso !!
export const groups: Group[] = [
  {
    id: "6",
    name: 'Inova Tech',
    members: [
      { name: 'Aline Silva', linkedin: 'https://www.linkedin.com/in/aline-maria-costa-silva-194661327' },
      { name: 'Igor Lino', },
      { name: 'Elen Santos', linkedin: 'https://www.linkedin.com/in/elen-damares/' },
      { name: 'Júnio Evangelista', linkedin: 'https://www.linkedin.com/in/júnio-evangelista-aires-dos-santos-186479278/' },
      { name: 'Mayk Lucas', linkedin: 'https://www.linkedin.com/in/mayk-lucas-0355511aa/' },
      { name: 'Keliane Soares', linkedin: 'https://www.linkedin.com/in/keliz' }
    ],
    project: {
      name: 'CRM para academia',
      summary: 'Plataforma web para academia que digitaliza o cadastro de alunos, substitui fichas de papel e oferece acesso rápido e seguro às informações, aumentando organização, produtividade e eficiência na gestão.',
      repositoryLink: 'https://github.com/FWK-inova-tech/sistema-academia',
      pitchLink: 'https://drive.google.com/drive/folders/1dC2KVMa0lBCgwgc448cxj_70iwAMU5hp?usp=sharing',
    },
  },
];
