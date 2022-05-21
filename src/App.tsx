import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Router from './router/router';
import ThemeConfig from './ThemeConfig';

const App = () => (
  <BrowserRouter>
    <ThemeConfig>
      <Layout>
        <Router />
      </Layout>
    </ThemeConfig>
  </BrowserRouter>
);

export default App;
