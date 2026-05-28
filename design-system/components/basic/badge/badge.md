# Badge

> Demonstra **valor numérico, notificação ou status**. Pode aparecer isolado ou
> próximo a outros componentes (ícone de menu, avatar, item de lista, aba).

Fonte de design: Figma › Design System › `badge #componets` (node `3047:18909`).
Doc de produto: ClickUp › Design System › Badge.

---

## Quando usar

- Sinalizar **status** de um item (ex.: "EM NEGOCIAÇÃO", "NOVO", "BETA").
- Mostrar um **contador** de itens/notificações (ex.: `99`).
- Marcar **presença de novidade** sem texto, com o dot (`basic`).

## Quando NÃO usar

- Para **ações clicáveis** → use Button.
- Para **filtros removíveis / seleção** → use Chip/Tag interativa.
- Para blocos de **texto longo** → badge é curto (1–2 palavras, número, ícone).

---

## Anatomia

```
complete:  [ ícone? ] [ texto? ] [ contador? ]
basic:     ●  (dot 8px, sem conteúdo)
```

A variação `complete` exige **pelo menos um** conteúdo (ícone, texto ou contador)
e os três são combináveis. A variação `basic` nunca tem conteúdo.

### Regras fixas do componente (não são opção de quem usa)

- **Ícone SEMPRE filled.** Use `material-icons` (Material Icons cheio), nunca
  `material-icons-outlined`. O CSS só estiliza `.material-icons`; o React força
  isso renderizando `<span class="material-icons">`.
- **Tipografia travada.** Texto e contador são SEMPRE `Open Sans` · Bold (700) ·
  10/12 · **UPPERCASE**. Não aceita outro peso ou caixa — o CSS reaplica em
  `.badge__label` / `.badge__counter` pra resistir a heranças quebradas.

---

## Variações

| Variação   | Descrição                                              | Classe          |
|------------|--------------------------------------------------------|-----------------|
| complete   | Default. Com ícone/texto/contador. Aceita medium/small | `.badge`        |
| basic      | Dot 8px, sem conteúdo, tamanho único                   | `.badge--basic` |

## Themes

| Theme  | Descrição                                  | Classe          |
|--------|--------------------------------------------|-----------------|
| filled | Default. Fundo sólido na cor, texto branco | `.badge`        |
| ghost  | Fundo branco, borda + texto na cor         | `.badge--ghost` |

## Sizes (só em `complete`)

| Size   | Padding   | Ícone | Uso                          | Classe          |
|--------|-----------|-------|------------------------------|-----------------|
| medium | `2px 8px` | 16px  | default                      | `.badge`        |
| small  | `1px 6px` | 12px  | **mais frequente** (ClickUp) | `.badge--small` |

## Cores semânticas

A cor é controlada pela custom property `--badge-color`; `filled` e `ghost`
derivam dela automaticamente. Default = info (azul). Respeitar a paleta
semântica do DS — não usar cor arbitrária.

| Intenção | Token              | Classe            |
|----------|--------------------|-------------------|
| info     | `--color-blue-400` | (default)         |
| success  | `--color-green-400`| `.badge--success` |
| warning  | `--color-orange-400`| `.badge--warning` |
| danger   | `--color-red-400`  | `.badge--danger`  |
| neutral  | `--color-gray-400` | `.badge--neutral` |

---

## Default

> **Convenção do template (todos os componentes):** esta seção declara a
> combinação renderizada quando nenhum modificador é passado e diz se ela é uma
> **recomendação de uso** ou apenas um **fallback técnico**. Componentes menos
> contextuais (ex.: Button, Input) devem trazer aqui um default recomendado
> explícito (ex.: "Button default = primary · medium").

O Badge é um componente **contextual**: theme, size, variação e cor dependem do
significado no contexto (status, contador, notificação). Por isso **não há
default de uso recomendado** — quem aplica escolhe caso a caso.

Para referência, o **default técnico** (classe `.badge` isolada, sem
modificadores) renderiza:

| Eixo     | Default técnico |
|----------|-----------------|
| theme    | filled          |
| size     | medium          |
| variação | complete        |
| cor      | info (azul)     |

Esse default técnico é só o ponto de partida do CSS — não significa "use sempre
filled azul medium". Defina os modificadores conforme o caso.

---

## Estados

Badge é **estático** (não interativo). Não tem hover/focus/disabled próprios.
Quando reflete estado dinâmico (contador que muda, dot de novidade), o **valor**
muda — não há pseudo-classes de interação.

---

## Tokens utilizados

- `--color-blue-400` / `green` / `orange` / `red` / `gray` `-400` — cor (via `--badge-color`)
- `--color-white` — texto no filled / fundo no ghost
- `--radius-pill` — cantos totalmente arredondados
- `--font-family-base` — Open Sans
- `--font-size-xs` (10px) + `--line-height-xs` (12px) + `--font-weight-bold` (700) — tipografia
- Padding/gap: valores finos do Figma (`2px 8px` medium, `1px 6px` small, `gap 2px`) — sub-4px é intencional pra densidade do componente

---

## Acessibilidade

- **Decorativo** (status textual já visível): `<span class="badge">`.
- **Dinâmico** (contador/notificação que atualiza): envolver com
  `role="status"` e `aria-label` descritivo — ex.:
  `<span class="badge badge--basic" role="status" aria-label="Nova atualização"></span>`.
  O `basic` dot **sempre** precisa de `aria-label` (não tem texto visível).
- Contraste: filled usa texto branco sobre cor `-400` (≥ AA pra texto bold pequeno);
  ghost usa a própria cor sobre branco.
- Não use cor como **único** portador de significado — combine com texto/ícone
  quando o status for crítico.

---

## Comportamento (JS)

Nenhum. Componente puramente visual. A atualização de contador/cor é
responsabilidade de quem consome (trocar texto/classe).

---

## Markup canônico

```html
<!-- complete · filled · medium · info (default) -->
<span class="badge"><span class="badge__label">tag text</span></span>

<!-- complete · ghost · small · success, com ícone + contador -->
<!-- ícone SEMPRE filled → material-icons (nunca material-icons-outlined) -->
<span class="badge badge--ghost badge--small badge--success">
  <span class="badge__icon"><span class="material-icons">check</span></span>
  <span class="badge__label">aprovado</span>
  <span class="badge__counter">3</span>
</span>

<!-- basic · dot (precisa de aria-label) -->
<span class="badge badge--basic" role="status" aria-label="Nova atualização"></span>
```

---

## Versão

`2.0.0` — 2026-05-27
