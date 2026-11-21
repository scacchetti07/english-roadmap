# English Roadmap · B2 → C2

Roteiro interativo de inglês baseado em **Natural Method + Comprehensible Input**: 12 semanas, 84 dias de 30 minutos ativos, mais de 870 itens de vocabulário, gramática da semana, recursos e um criador de flashcards com exportação para o Anki.

## Como rodar

Requisitos: **Node.js 20.19+ ou 22+**.

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Outros scripts:

| Script | O que faz |
|---|---|
| `npm run build` | Checa os tipos e gera a versão de produção em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm run test` | Testes (dados das semanas, exportação Anki, sequência de dias) |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

Para publicar: rode `npm run build` e suba a pasta `dist/` em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## O que tem dentro

- **Progresso geral no topo**, com porcentagem animada, sequência de dias (streak), contadores e um **globo 3D (three.js)** em que a rota São Paulo → Toronto / Londres avança conforme você conclui os dias.
- **12 semanas temáticas** (apresentações, casa, comida, transporte, aluguel, saúde, dinheiro, entrevistas, trabalho, games e tecnologia, storytelling, cultura e debate), cada uma com:
  - tema, meta e conexão com seus interesses (anime, games, HQs, tecnologia, rock);
  - **tópico gramatical** com regras, exemplos com áudio e erros comuns de brasileiros;
  - **70–100 palavras, chunks, phrasal verbs, idioms e gírias** (com filtro, busca, áudio, marcar como dominado e envio para flashcards);
  - recursos e conteúdos para o barril;
  - micro-hábito diário.
- **7 dias por semana**: clique em um dia para ver o que estudar, com qual recurso e por quantos minutos. Dá para marcar cada tarefa e o dia inteiro (checklist). Concluir todas as tarefas conclui o dia automaticamente.
- **Flashcards**: o card gira em 3D quando você passa da frente para o verso (Tab, clique em "Verso" ou "Virar"). Ctrl/⌘ + Enter salva. Inclui baralhos, tags, edição, exclusão com desfazer e revisão rápida.
- **Exportação para o Anki**: um `.txt` já configurado (separador, HTML, tipo de nota Basic, coluna de tags e de baralho). No Anki 2.1.55+: *Arquivo → Importar*. Também exporta CSV.
- **Guia**: checklist de setup dos dispositivos, as 3 camadas do dia, fases e estimativa de prazo.
- **Backup**: exporte/importe progresso + flashcards em JSON (ícones no topo). Tudo fica salvo no navegador (localStorage).
- Tema claro/escuro, responsivo, acessível por teclado e respeita `prefers-reduced-motion`.

## Stack

React 19 · Vite 8 · TypeScript (strict) · Tailwind CSS 4 · shadcn/ui (Radix) · three.js + @react-three/fiber + drei · Motion · Zustand (persist) · Sonner · Lucide · canvas-confetti · Vitest · ESLint · Prettier

## Estrutura

```
src/
├── components/ui/      # componentes shadcn/ui
├── data/
│   ├── weeks/          # uma semana por arquivo (fácil de editar e ampliar)
│   ├── resources.ts    # catálogo de recursos reaproveitados
│   ├── schedule.ts     # molde dos 7 dias (30 min) montado a partir de cada semana
│   └── index.ts        # junta tudo e calcula totais
├── features/
│   ├── layout/         # cabeçalho com progresso, barra de ações
│   ├── globe/          # globo 3D (carregado sob demanda)
│   ├── roadmap/        # semanas, dias, painel do dia, gramática, vocabulário, recursos
│   ├── flashcards/     # editor com flip 3D, lista, revisão, exportação
│   └── guide/          # setup, camadas, fases
├── hooks/  lib/  store/
```

### Adicionar uma nova semana

1. Copie `src/data/weeks/week12.ts` para `week13.ts` e edite o conteúdo.
2. O vocabulário fica em `vocabRaw`, uma linha por item: `termo | significado | tag` (tags: `w` palavra, `pv` phrasal verb, `ch` chunk, `id` idiom, `sl` informal).
3. Importe a semana em `src/data/index.ts`. Os testes garantem 70–100 itens, 30 minutos por dia e ids únicos.

Os links de busca do YouTube (`ytSearch`) foram usados de propósito no lugar de vídeos específicos, para nunca quebrarem.
