# Primary Button

> O Primary Button é o botão principal e geralmente é aplicado para ações ou
> decisões que são importantes para o usuário e devem ser usados em toda a interface.

Fonte de design: Figma › Design System (node `2911:18077`).
Doc de produto: ClickUp › Design System › Button › Primary Button.

---

## Quando usar

- Ação **principal** de uma tela, formulário ou modal (ex.: "Salvar", "Enviar").
- Decisão que você quer que o usuário tome com destaque.

## Quando NÃO usar

- Ações **secundárias / de menor peso** → use um botão secundário/ghost de menor ênfase.
- **Só com ícone, sem texto** → não é permitido (ver Regras fixas). Para ação icon-only, use outro componente (icon button).
- Mais de um primary concorrendo na mesma área → mantenha **um** primary por contexto.

---

## Anatomia

```
[ ícone? ] [ texto ] [ ícone? ]
```

O texto é obrigatório. O ícone é opcional e pode ficar à esquerda ou à direita —
nunca os dois ao mesmo tempo no uso comum, e nunca sozinho.

### Regras fixas do componente (não são opção de quem usa)

- **Nunca icon-only.** O Primary Button sempre tem texto. Ícone é só acompanhamento.
- **Texto sempre Bold + UPPERCASE**, Open Sans. O CSS força via `text-transform`.
- **Ícone sempre filled** (`material-icons`), nunca outlined.

---

## Themes

O Primary Button possui dois estilos de aplicação: `filled` e `ghost`.

| Theme  | Descrição                                  | Classe               |
|--------|--------------------------------------------|----------------------|
| filled | Default. Fundo sólido na cor, texto branco | `.btn-primary`       |
| ghost  | Fundo transparente, borda + texto na cor   | `.btn-primary--ghost`|

## Sizes

O Primary Button possui quatro tamanhos: `large`, `medium`, `small` e `xsmall`.
O tamanho medium é o mais utilizado, todos os demais têm uso ponderado.

| Size   | Padding    | Fonte           | Ícone | Classe                  |
|--------|------------|-----------------|-------|-------------------------|
| large  | `10px 16px`| 16/22 Bold      | 22px  | `.btn-primary--large`   |
| medium | `8px 12px` | 14/20 Bold      | 20px  | (default)               |
| small  | `6px 10px` | 12/18 Bold      | 18px  | `.btn-primary--small`   |
| xsmall | `4px 8px`  | 10/16 Bold      | 12px  | `.btn-primary--xsmall`  |

## Variations

O Primary Button pode ser usado sem ícones ou com ícone, no lado esquerdo
`icon-left` ou no lado direito `icon-right`, sempre acompanhado de texto. Não
deve-se usar o Primary Button portando somente ícones.

| Variação    | Markup                                                          |
|-------------|----------------------------------------------------------------|
| No Icon     | só `.btn-primary__label`                                       |
| Icon Left   | `.btn-primary__icon` antes do `.btn-primary__label`            |
| Icon Right  | `.btn-primary__icon` depois do `.btn-primary__label`           |

---

## Default

> **Convenção do template:** declara o que é renderizado sem modificadores e se
> é recomendação de uso ou só fallback técnico.

O Primary Button **tem um default recomendado**: `filled` · `medium`. A classe
`.btn-primary` isolada já entrega essa combinação, que é a de uso mais frequente
(per ClickUp). Use os modificadores apenas quando o contexto pedir.

| Eixo  | Default      |
|-------|--------------|
| theme | filled       |
| size  | medium       |
| estado| default      |
| ícone | nenhum       |

---

## Estados

Cada botão tem os estados: `default`, `hover`, `active` e `disable`.

| Estado   | filled                       | ghost                                   | Aplicação                       |
|----------|------------------------------|-----------------------------------------|---------------------------------|
| default  | BG `--color-blue-400`        | transparente · borda + texto `blue-400` | repouso                         |
| hover    | BG `--color-blue-600`        | **preenche: BG `blue-600` + texto branco** | `:hover` / `.is-hover`       |
| active   | BG `--color-blue-700`        | transparente · borda + texto `blue-700` | `:active` / `.is-active`        |
| disable  | BG blue-400 + opacity 0.4    | transparente + opacity 0.4              | `disabled` / `.is-disabled`     |

No **hover**, o ghost deixa de ser apenas "tom mais escuro" e adota o mesmo
preenchimento do filled (fundo `blue-600`, texto branco), com transição suave
(`background`/`border-color`/`color` 180ms, herdada do `.btn-primary` base).

`:focus-visible` aplica outline 2px na cor do botão (a11y de teclado).

---

## Tokens utilizados

- `--color-blue-400` / `-600` / `-700` — cor por estado (via `--btn-color*`)
- `--color-white` — texto no filled
- `--radius-sm` (4px) — cantos
- `--font-family-base` — Open Sans
- `--font-size-btn-{lg,md,sm,xs}` + `--line-height-btn-{lg,md,sm,xs}` + `--font-weight-bold` — tipografia por size
- Padding/gap por size: valores do Figma (10/16, 8/12, 6/10, 4/8 · gap 12/10/8/6)

---

## Acessibilidade

- Tag semântica: `<button type="button">` (ou `type="submit"` em formulário).
- Estado desabilitado: usar o atributo `disabled` real (não só `.is-disabled`,
  que existe apenas para documentação estática do estado).
- Foco visível: `:focus-visible` com outline 2px na cor — não remover.
- Texto sempre presente garante rótulo acessível; ícone é decorativo.
- Contraste: filled = branco sobre blue-400/600/700 (≥ AA); ghost = cor sobre branco.

---

## Comportamento (JS)

Nenhum comportamento próprio. hover/active são CSS; `disabled` é atributo. A ação
do clique é responsabilidade de quem consome.

---

## Markup canônico

```html
<!-- filled · medium · sem ícone (default) -->
<button type="button" class="btn-primary">
  <span class="btn-primary__label">Button title</span>
</button>

<!-- ghost · large · ícone à esquerda -->
<button type="button" class="btn-primary btn-primary--ghost btn-primary--large">
  <span class="btn-primary__icon"><span class="material-icons">file_download</span></span>
  <span class="btn-primary__label">Button title</span>
</button>

<!-- xsmall · desabilitado -->
<button type="button" class="btn-primary btn-primary--xsmall" disabled>
  <span class="btn-primary__label">Button title</span>
</button>
```

---

## Versão

`2.0.0` — 2026-05-27
