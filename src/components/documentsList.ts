export type Document = {
    id: number;
    situacao: string;
    tamanho:string;
    pendjuntada:string;
    name: string;
    page:string;
    children?: Document[];
  };
  
  export const documentsData: Document[] = [
    {
      id: 1, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Petição Inicial de Ação Civil',
      page: '81-85',
      children: [
        {
          id: 2, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Citação',
          page: '46-50',
          children: [
            {
              id: 3, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Resposta à Citação',
              page: '101-102',
              children: [
                {
                  id: 4, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Contestação',
                  page: '110-114',
                  children: [
                    {
                      id: 5, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                      name: 'Réplicas à Contestação',
                      page: '36-40',
                      children: [
                        { id: 6, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Juntada de Documentos', page: '1-5' },
                        { id: 7, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Pedido de Tutela Provisória', page: '57-61' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Ação de Indenização',
      page: '16-20',
      children: [
        {
          id: 9, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Laudo Pericial',
          page: '103-104',
          children: [
            {
              id: 10, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Manifestação sobre o Laudo',
              page: '67-71',
              children: [
                {
                  id: 11, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Pedido de Produção de Provas',
                  page: '72-76',
                  children: [
                    { id: 12, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Provas Documentais', page: '115-119' },
                    { id: 13, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Provas Testemunhais', page: '77-78' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 14, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Ação de Alimentos',
      page: '6-10',
      children: [
        {
          id: 15, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Pedido de Alimentos',
          page: '11-15',
          children: [
            {
              id: 16, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Decisão Judicial',
              page: '54-56',
              children: [
                {
                  id: 17, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Recurso de Apelação',
                  page: '21-25',
                  children: [
                    { id: 18, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Contrarrazões', page: '41-45' },
                    { id: 19, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Juntada de Novos Documentos', page: '28-30' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 20, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Embargos de Declaração',
      page: '96-100',
      children: [
        {
          id: 21, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Decisão dos Embargos',
          page: '31-35',
          children: [
            {
              id: 22, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Recurso Especial',
              page: '50-53',
              children: [
                {
                  id: 23, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Petição de Admissibilidade',
                  page: '125-126',
                  children: [
                    { id: 24, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Parecer do Ministério Público', page: '62-66' },
                    { id: 25, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Juntada de Novos Fatos', page: '120-124' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 26, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Ação de Usucapião',
      page: '3-5',
      children: [
        {
          id: 27, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Certidão de Registro de Imóveis',
          page: '86-90',
          children: [
            {
              id: 28, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Manifestação do Réu',
              page: '47-50',
              children: [
                {
                  id: 29, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Relatório de Vistoria',
                  page: '105-109',
                  children: [
                    { id: 30, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Pedido de Desocupação', page: '95-99' },
                    { id: 31, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Protesto de Irregularidade', page: '35-40' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  