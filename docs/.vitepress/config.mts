// import { defineConfig } from 'vitepress'

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "Projeto Find a Friend",
//   description: "Desenvolvido na trilha de NodeJS da Rocketseat.",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Getting Started', link: '/guide/00_GettingStarted' },

//     ],

//     sidebar: [
//       {
//         text: 'Getting Started',
//         items: [
//           { text: 'Inicio', link: '/guide/00_GettingStarted' },
//           { text: 'Pré-Requisito', link: '/guide/02_Requisitos' },
//           { text: 'Instalação', link: '/guide/03_Instalacao' },
//           { text: 'Containers Docker', link: '/guide/04_ContainersDocker' },
//           { text: 'Executando a aplicação', link: 'guide/05_ExecutandoAplicacao' }
//         ]
//       },
//       {
//         text: 'Dependencias',
//         items: [
//           { text: 'Bibliotecas', link: '/bibliotecas' },
//         ]
//       },
//       {
//         text: 'Banco de Dados',
//         items: [
//           { text: 'Postgress', link: '/postgres' },
//           { text: 'Relacionamentos' },
//           { text: 'Prisma' }

//         ]
//       },
//       {
//         text: `Roadmap`,
//         items: [
//           { text: 'Próximos passo', link: '/roadmap/roadmap.md' },
//         ]
//       },
//       {
//         text: 'Modelos',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' },
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
// })


//*****************************************************

// import { defineConfig } from 'vitepress'

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "Projeto Find a Friend",
//   description: "Desenvolvido na trilha de NodeJS da Rocketseat.",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Início', link: '/' },
//       { text: 'Guia', link: '/guide/overview' },
//       { text: 'Instalação', link: '/installation/requirements' },
//       { text: 'Desenvolvimento', link: '/development/testing' },
//       { text: 'API', link: '/api/flow' }
//     ],

//     sidebar: {
//       '/guide/': [
//         {
//           text: 'Guia',
//           collapsed: false,
//           items: [
//             { text: 'Visão Geral', link: '/guide/overview' },
//             { text: 'Tecnologias', link: '/guide/technologies' },
//             { text: 'Funcionalidades', link: '/guide/features' },
//             { text: 'Repositório', link: '/guide/repository' }
//           ]
//         }
//       ],

//       '/installation/': [
//         {
//           text: 'Instalação',
//           collapsed: false,
//           items: [
//             { text: 'Pré-requisitos', link: '/installation/requirements' },
//             { text: 'Instalação Local', link: '/installation/local' },
//             { text: 'Instalação com Docker', link: '/installation/docker' },
//             { text: 'Banco de Dados', link: '/installation/database' }
//           ]
//         }
//       ],

//       '/development/': [
//         {
//           text: 'Desenvolvimento',
//           collapsed: false,
//           items: [
//             { text: 'Testes', link: '/development/testing' },
//             { text: 'Bibliotecas', link: '/development/libraries' },
//             { text: 'Próximos Passos', link: '/development/next-steps' }
//           ]
//         }
//       ],

//       '/api/': [
//         {
//           text: 'API',
//           collapsed: false,
//           items: [
//             { text: 'Fluxo de Funcionamento', link: '/api/flow' }
//           ]
//         }
//       ],

//       // Sidebar padrão para a página inicial
//       '/': [
//         {
//           text: 'Introdução',
//           items: [
//             { text: 'Página Inicial', link: '/' },
//             { text: 'Guia Rápido', link: '/guide/overview' }
//           ]
//         }
//       ]
//     },

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ],

//     // Configurações adicionais para melhor UX
//     search: {
//       provider: 'local'
//     },

//     outline: {
//       level: [2, 3],
//       label: 'Nesta página'
//     },

//     footer: {
//       message: 'Desenvolvido com VitePress',
//       copyright: 'Copyright © 2024 Projeto Find a Friend'
//     },

//     docFooter: {
//       prev: 'Página anterior',
//       next: 'Próxima página'
//     },

//     lastUpdated: {
//       text: 'Atualizado em',
//       formatOptions: {
//         dateStyle: 'full',
//         timeStyle: 'medium'
//       }
//     }
//   },

//   // Configurações gerais do VitePress
//   lastUpdated: true,
//   cleanUrls: true,

//   head: [
//     ['meta', { name: 'theme-color', content: '#3c8772' }],
//     ['meta', { name: 'og:type', content: 'website' }],
//     ['meta', { name: 'og:locale', content: 'pt-BR' }],
//     ['meta', { name: 'og:site_name', content: 'Find a Friend Docs' }],
//   ],

//   // Internacionalização para português
//   lang: 'pt-BR',

//   // Configuração de markdown
//   markdown: {
//     // theme: 'material-palenight',
//     lineNumbers: true
//   }
// })

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Projeto Find a Friend",
  description: "Desenvolvido na trilha de NodeJS da Rocketseat.",
  base: '/ignite_find_a_friend_api/',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Remove a navegação superior
    nav: [],

    sidebar: [
      {
        text: '🏠 Início',
        link: '/',
        items: [
          { text: 'API Find a Friend', link: '/guide/index.md' }
        ]
      },
      {
        text: '📖 Guia',
        collapsed: false,
        items: [
          { text: 'Visão Geral', link: '/guide/overview' },
          { text: 'Tecnologias', link: '/guide/technologies' },
          { text: 'Funcionalidades', link: '/guide/features' },
          { text: 'Repositório', link: '/guide/repository' }
        ]
      },
      {
        text: '⚙️ Instalação',
        collapsed: false,
        items: [
          { text: 'Pré-requisitos', link: '/installation/requirements' },
          { text: 'Instalação Local', link: '/installation/local' },
          { text: 'Instalação com Docker', link: '/installation/docker' },
          { text: 'Banco de Dados', link: '/installation/database' }
        ]
      },
      {
        text: '🔧 Desenvolvimento',
        collapsed: false,
        items: [
          { text: 'Testes', link: '/development/testing' },
          { text: 'Bibliotecas', link: '/development/libraries' },
          { text: 'Próximos Passos', link: '/development/next-steps' }
        ]
      },
      {
        text: '🚀 API',
        collapsed: false,
        items: [
          { text: 'Fluxo de Funcionamento', link: '/api/flow' }
        ]
      },
      {
        text: '📊 Banco de Dados',
        collapsed: true,
        items: [
          { text: 'PostgreSQL', link: '/database/postgres' },
          { text: 'Relacionamentos', link: '/database/relationships' },
          { text: 'Prisma ORM', link: '/database/prisma' }
        ]
      },
      {
        text: '🛠️ Ferramentas',
        collapsed: true,
        items: [
          { text: 'Docker', link: '/tools/docker' },
          { text: 'Monitoramento', link: '/tools/monitoring' },
          { text: 'SonarQube', link: '/tools/sonarqube' }
        ]
      },
      {
        text: '🎯 Roadmap',
        collapsed: true,
        items: [
          { text: 'Próximos Passos', link: '/roadmap/next-steps' },
          { text: 'Funcionalidades Futuras', link: '/roadmap/future-features' }
        ]
      },
      {
        text: '❓ Exemplos',
        collapsed: true,
        items: [
          { text: 'Exemplos Markdown', link: '/examples/markdown' },
          { text: 'Exemplos API', link: '/examples/api' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    // Configurações adicionais para melhor UX
    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'Nesta página'
    },

    footer: {
      message: 'Desenvolvido com VitePress por Vítor Guedes',
      copyright: 'Copyright © 2025 Projeto Find a Friend'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },

    lastUpdated: {
      text: 'Atualizado em novembro de 2025',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },

  // Adicione esta configuração
  vite: {
    server: {
      host: true,
      port: 5173
    }
  },
  // Configurações gerais do VitePress
  // lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'pt-BR' }],
    ['meta', { name: 'og:site_name', content: 'Find a Friend Docs' }],
  ],

  // Internacionalização para português
  lang: 'pt-BR',

  // Configuração de markdown
  markdown: {
    // theme: 'material-palenight',
    lineNumbers: true
  }
})