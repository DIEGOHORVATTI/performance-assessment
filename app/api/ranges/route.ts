import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(_req: NextApiRequest, _res: NextApiResponse) {
  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return new Response(JSON.stringify(ranges))
}

const ranges = [
  {
    min: 0,
    max: 10,
    title: 'Insatisfatório',
    subTitle:
      'Desempenho significativamente abaixo das expectativas, exigindo melhorias urgentes e imediatas.',
    backgroundColor: 'red',
    color: 'white',
  },
  {
    min: 10,
    max: 20,
    title: 'Abaixo das Expectativas',
    subTitle:
      'Desempenho abaixo do esperado, com oportunidades claras de melhoria em áreas específicas.',
    backgroundColor: 'red',
    color: 'white',
  },
  {
    min: 20,
    max: 30,
    title: 'Em Desenvolvimento',
    subTitle:
      'Atende às expectativas de desempenho, cumprindo parcialmente as responsabilidades e metas estabelecidas.',
    backgroundColor: 'orange',
    color: 'white',
  },
  {
    min: 30,
    max: 40,
    title: 'Aceitável',
    subTitle:
      'Atende às expectativas de desempenho, cumprindo as responsabilidades e metas estabelecidas.',
    backgroundColor: 'orange',
    color: 'white',
  },
  {
    min: 40,
    max: 60,
    title: 'Bom',
    subTitle: 'Desempenho consistentemente, frequentemente atingindo as metas estabelecidas.',
    backgroundColor: 'yellow',
    color: 'black',
  },
  {
    min: 60,
    max: 80,
    title: 'Acima das Expectativas',
    subTitle:
      'Desempenho consistentemente acima da média, frequentemente excedendo as metas estabelecidas.',
    backgroundColor: 'green',
    color: 'white',
  },
  {
    min: 80,
    max: 90,
    title: 'Excelente',
    subTitle:
      'Supera consistentemente todas as expectativas, demonstrando excelência em todas as áreas de atuação. Muito acima do que é esperado.',
    backgroundColor: 'green',
    color: 'white',
  },
  {
    min: 90,
    max: 100,
    title: 'Excepcional',
    subTitle:
      'Supera consistentemente todas as expectativas, demonstrando excelência em todas as áreas de atuação. Referência na área de atuação.',
    backgroundColor: 'green',
    color: 'white',
  },
]
