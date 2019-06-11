export type PageProps = {
  content: String
}

const Page = (layout, context) => `
  <p>Layout: ${layout}</p>
  <p>Context: ${context}</p>
`;

const Login = () => ``;

const Error = () => ``;

const Dashboard = () => ``;

export {
  Page,
  Login,
  Error,
  Dashboard
}