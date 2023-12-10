/* eslint-disable react-refresh/only-export-components */
import { withAppProviders } from './providers';
import { AppRouter } from './router';

const App = () => {
  return <AppRouter />;
};

export default withAppProviders(App);
