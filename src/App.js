import ApolloWrapper from './components/ApolloWrapper';
import Routes from './components/Routes';
import { ThemesProvider } from './components/ThemesProvider';

function App() {
  return (
    <ApolloWrapper>
      <ThemesProvider>
        <Routes />
      </ThemesProvider>
    </ApolloWrapper>
  );
}

export default App;
