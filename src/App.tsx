import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  const deathDate = 1663286400000;

  return <Layout deathDate={deathDate} />;
};

export default App;
