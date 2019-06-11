
type TextProps = {
    fontFamily, 
    fontWeight, 
    textAlign, 
    lineHeight, 
    letterSpacing
}

export const Text = (value, props: TextProps)=> `
  <h1 style=${props}>${value}</h1>
`;