# Secondary Button

> O Secondary Button é o botão secundário e deve ser usado em ações que não
> são decisórias ou principais de uma interface.

Fonte de design: Figma › Design System (node `3052:18964`).
Doc de produto: ClickUp › Design System › Button › Secondary Button.

---

## Quando usar

- Ação **secundária** que acompanha um Primary Button (ex.: "Cancelar", "Limpar").
- Ações **utilitárias** em listas e toolbars (ex.: "Exportar", "Filtrar por").
- Triggers de dropdown (variação `content + select` ou `icon + select`).

## Quando NÃO usar

- Ação **principal** ou decisória → use [Primary Button](../primary-button/primary-button.md).
- Quando há mais de um Secondary Button "competindo" pela mesma ação — escolha
  apenas um e deixe o outro em outra área.

---

## Anatomia

```
[ ícone? ] [ label? ] [ select? ]
```

O botão é composto por até 3 segmentos. Pelo menos um precisa estar presente.
As 5 variações documentadas são combinações desses segmentos.

### Regras fixas do componente (não são opção de quem usa)

- **Ícone sempre filled** (`material-icons`), nunca outlined.
- Texto do label sempre **Regular** (não Bold) — diferente do Primary Button.
- Em `filled-gray`, o segmento de ícone fica **1 shade mais escuro** que o segmento de label — é a "personalidade" 2-tone do tema.
- Em `filled-blue`, todos os segmentos têm a mesma cor (monotom).

---

## Themes

O Secondary Button possui um estilo de aplicação em quatro cores distintas:
`filled-blue`, `filled-gray`, `filled-red` e `white`.

| Theme        | Descrição                                                | Classe                          |
|--------------|----------------------------------------------------------|---------------------------------|
| filled-blue  | Default. Fundo azul claro, texto azul escuro. Monotom.   | `.btn-secondary` (default)       |
| filled-gray  | Tom neutro 2-tone (ícone +1 shade > label).              | `.btn-secondary--filled-gray`    |
| filled-red   | Ações destrutivas leves (excluir, remover). Monotom.     | `.btn-secondary--filled-red`     |
| white        | Fundo branco — usar sobre superfícies não-brancas.       | `.btn-secondary--white`          |

> **Sobre o tema white.** Ele tem fundo branco puro — em superfícies brancas
> fica invisível por design. Usar apenas sobre fundos cinza/coloridos (ex.: um
> card sobre `gray-50`, header colorido, etc.).

## Sizes

O Secondary Button possui quatro tamanhos: `large`, `medium`, `small` e
`xsmall`. O tamanho medium é o mais utilizado, todos os demais têm uso ponderado.

| Size   | Altura | Padding label  | Padding ícone | Fonte         | Ícone | Classe                       |
|--------|--------|----------------|---------------|---------------|-------|------------------------------|
| large  | 42px   | `0 14px`       | `0 10px`      | 16/22 Regular | 22px  | `.btn-secondary--large`       |
| medium | 36px   | `0 12px`       | `0 8px`       | 14/20 Regular | 20px  | (default)                    |
| small  | 30px   | `0 10px`       | `0 6px`       | 12/18 Regular | 18px  | `.btn-secondary--small`       |
| xsmall | 24px   | `0 8px`        | `0 4px`       | 10/16 Regular | 14px  | `.btn-secondary--xsmall`      |

## Variation

O Secondary Button pode ser usado em cinco variações: sem ícones, com ícone,
somente com ícone, somente ícone e select, somente content e select.

| Variação           | Segmentos                          |
|--------------------|------------------------------------|
| No Icon            | `__label`                           |
| Icon + Content     | `__icon` + `__label`                |
| Icon Only          | `__icon` (sempre com `aria-label`)  |
| Icon + Select      | `__icon` + `__select`               |
| Content + Select   | `__label` + `__select`              |

---

## Default

> **Convenção do template:** declara o que é renderizado sem modificadores e
> se é recomendação de uso ou só fallback técnico.

O Secondary Button **tem um default recomendado**: `filled-blue` · `medium` ·
no-icon. A classe `.btn-secondary` isolada já entrega essa combinação.

| Eixo     | Default     |
|----------|-------------|
| theme    | filled-blue |
| size     | medium      |
| estado   | default     |
| variação | no-icon     |

---

## States

Cada botão tem os seguintes estados: `default`, `hover`, `active` e `disable`.

### Filled Blue

| Estado   | Fundo                       | Texto                    |
|----------|-----------------------------|--------------------------|
| default  | `blue-light-5` (#f5f9fe)    | `blue-700` (#0d66d0)     |
| hover    | `blue-light-20` (#d7e8fc)   | `blue-700`               |
| active   | `blue-500` (#2680eb)        | `white`                  |
| disable  | igual default + opacity 0.4 | igual default            |

### Filled Gray (2-tone)

| Estado   | Label bg               | Ícone bg               | Texto             |
|----------|------------------------|------------------------|-------------------|
| default  | `gray-200` (#f4f4f4)   | `gray-300` (#eaeaea)   | `gray-800`        |
| hover    | `gray-300` (#eaeaea)   | `gray-400` (#d3d3d3)   | `gray-800`        |
| active   | `gray-400` (#d3d3d3)   | `gray-500` (#bcbcbc)   | `gray-800`        |
| disable  | igual default + opacity 0.4 | igual default + opacity 0.4 | igual default |

### Filled Red

| Estado   | Fundo                       | Texto                    |
|----------|-----------------------------|--------------------------|
| default  | `red-light-5` (#fef7f7)     | `red-600` (#d7373f)      |
| hover    | `red-light-20` (#fbdee0)    | `red-600`                |
| active   | `red-400` (#ec5b62)         | `white`                  |
| disable  | igual default + opacity 0.4 | igual default            |

### White

| Estado   | Fundo                       | Texto                    |
|----------|-----------------------------|--------------------------|
| default  | `white` (#ffffff)           | `gray-800` (#505050)     |
| hover    | `gray-100` (#f5f5f5)        | `gray-800`               |
| active   | `gray-300` (#eaeaea)        | `gray-800`               |
| disable  | igual default + opacity 0.4 | igual default            |

`:focus-visible` aplica outline 2px na cor do botão (a11y de teclado).

---

## Tokens utilizados

- `--color-blue-light-5` / `--color-blue-light-20` / `--color-blue-500` / `--color-blue-700` — paleta do filled-blue
- `--color-blue-400` — focus outline do filled-blue
- `--color-gray-100` / `--color-gray-200` / `--color-gray-300` / `--color-gray-400` / `--color-gray-500` — paleta do filled-gray e white
- `--color-gray-800` — texto do filled-gray e white
- `--color-red-light-5` / `--color-red-light-20` / `--color-red-400` / `--color-red-600` — paleta do filled-red
- `--color-white` — fundo do tema white e texto do active no filled-blue / filled-red
- `--radius-sm` (4px) — cantos
- `--font-family-base` — Open Sans
- `--font-size-btn-{lg,md,sm,xs}` + `--line-height-btn-{lg,md,sm,xs}` — tipografia por size

---

## Acessibilidade

- Tag semântica: `<button type="button">` (ou `type="submit"` em formulário).
- **Icon Only**: sempre incluir `aria-label` descrevendo a ação (não há texto visível).
- **Select**: incluir `aria-haspopup="true"` quando o select abre menu/dropdown.
- Estado desabilitado: usar o atributo `disabled` real (não só `.is-disabled`).
- Foco visível: `:focus-visible` com outline 2px — não remover.
- Contraste: filled-blue (texto blue-700 sobre blue-light-5) e filled-gray (texto gray-800 sobre gray-200/300) atendem AA.

---

## Comportamento (JS)

Nenhum comportamento próprio. hover/active são CSS; `disabled` é atributo. A
ação do clique (incluindo abrir dropdown na variação `select`) é
responsabilidade de quem consome.

---

## Markup canônico

```html
<!-- filled-blue · medium · sem ícone (default) -->
<button type="button" class="btn-secondary">
  <span class="btn-secondary__label">Button title</span>
</button>

<!-- filled-blue · medium · ícone + content -->
<button type="button" class="btn-secondary">
  <span class="btn-secondary__icon"><span class="material-icons">add</span></span>
  <span class="btn-secondary__label">Button title</span>
</button>

<!-- filled-gray · medium · só ícone -->
<button type="button" class="btn-secondary btn-secondary--filled-gray" aria-label="Adicionar">
  <span class="btn-secondary__icon"><span class="material-icons">add</span></span>
</button>

<!-- filled-blue · medium · ícone + select -->
<button type="button" class="btn-secondary" aria-haspopup="true">
  <span class="btn-secondary__icon"><span class="material-icons">add</span></span>
  <span class="btn-secondary__select"><span class="material-icons">arrow_drop_down</span></span>
</button>

<!-- filled-gray · medium · content + select -->
<button type="button" class="btn-secondary btn-secondary--filled-gray" aria-haspopup="true">
  <span class="btn-secondary__label">Filtrar por</span>
  <span class="btn-secondary__select"><span class="material-icons">arrow_drop_down</span></span>
</button>

<!-- filled-red · medium · ações destrutivas leves -->
<button type="button" class="btn-secondary btn-secondary--filled-red">
  <span class="btn-secondary__icon"><span class="material-icons">delete</span></span>
  <span class="btn-secondary__label">Excluir</span>
</button>

<!-- white · medium · sobre fundo cinza/colorido -->
<button type="button" class="btn-secondary btn-secondary--white">
  <span class="btn-secondary__icon"><span class="material-icons">add</span></span>
  <span class="btn-secondary__label">Button title</span>
</button>
```

---

## Versão

`2.0.0` — 2026-05-28
