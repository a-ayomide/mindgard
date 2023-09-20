import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/reactflow/dist/style.css';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FullPageLoader } from './components';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

function App() {
  return (
    <ChakraProvider>
      <Suspense fallback={<FullPageLoader />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>
            <AppRoutes />
          </Router>
        </ErrorBoundary>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
