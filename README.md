# 🛠️ Desafio: Salvando o Componente de Slider

## 📖 História

Era uma vez, em uma empresa de tecnologia, um desenvolvedor estava responsável por implementar um simples componente de Slider. Com muita confiança, ele escreveu o código, acreditando que tudo estava funcionando bem.

No entanto, o tempo passou, o deadline se aproximava, e foi quando o **outro desenvolvedor** foi chamado para revisar o trabalho. O que ele encontrou foi uma **catástrofe**!

O componente estava com **performance horrível**, o estado da aplicação era atualizado constantemente e **regras de estilo** estavam longe de ser seguidas. A interface não refletia o que havia sido planejado, e o Figma deixava claro que havia muito o que ser ajustado. O desenvolvedor ficou com uma missão impossível: **três dias** para consertar esse código e entregar um componente impecável.

Agora, é **você** quem precisa assumir essa missão! 💼

## 🚩 Desafio

Você tem **3 dias** para otimizar e refatorar esse componente da melhor forma possível. O código atual está mal implementado, com **requisições repetitivas a cada mudança** no Slider, e os estilos precisam ser ajustados para seguir o design no Figma.

### Problemas principais:

- A performance está inaceitável. O Slider faz chamadas de API desnecessárias a cada movimento.
- Os estilos estão fora do padrão estabelecido no Figma (veja o link abaixo).
- O componente está usando `useEffect` e `useState` de maneira ineficiente, e isso está impactando na experiência do usuário.

### 📝 O que você precisa fazer:

- Otimizar o componente para que ele tenha um desempenho melhor, evitando chamadas de API desnecessárias e garantindo fluidez ao usuário.
- Refatorar o código para seguir boas práticas de React, Next.js e Material UI.
- Aplicar os estilos de acordo com o Figma (consulte o design [**aqui**](https://www.figma.com/design/BeXtIaM2riUrU7fbrighSx/Figma-Teste-Pr%C3%A1tico-Suzano?node-id=73-2081&t=9GhKseP1wDlKqR0P-1)).
- Documentar todas as mudanças e explicações sobre como as melhorias foram feitas.

## 📦 Instruções

1. Instale as dependências e execute o projeto.
2. Analise o componente problemático que está em `src/components/SuzSlider.js`.
3. Acesse o design no Figma [clicando aqui](https://www.figma.com/design/BeXtIaM2riUrU7fbrighSx/Figma-Teste-Pr%C3%A1tico-Suzano?node-id=73-2081&t=9GhKseP1wDlKqR0P-1) para aplicar os estilos corretos.
4. Faça as otimizações necessárias para melhorar a performance do componente.
5. Teste seu código para garantir que o Slider funcione de maneira fluida e atenda aos padrões estabelecidos.
6. Suba suas mudanças e envie o repositório atualizado para revisão.

## 🕒 Prazo

Você tem **3 dias** para resolver este desafio. Faça o seu melhor para entregar um código limpo, eficiente e bem documentado!

Boa sorte, e lembre-se: **o prazo está apertado, mas é possível entregar algo incrível**! 🚀
