import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  const deathDate = new Date("2022-09-16");

  return <Layout deathDate={deathDate} />;
};

export default App;
