type FlexProps = {}
type GridProps = {}
type WrapperProps = {}
type CardProps = {}

export const Container = (props: WrapperProps, content) => `
  <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
`;

export const Flex = (props: FlexProps, content) => `
  <div class="flex"> ${content} </div>
`;

export const Grid = (props: GridProps, content) => `
  <div class="flex col"> ${content} </div>
`;

export const Card = (props: CardProps, content) => `
  <div class="card">${content}</div>
`;