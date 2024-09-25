import AppLayout from './components/layout/AppLayout';
import { CryptoContextProvider } from './context/cryptoContext';

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout></AppLayout>
    </CryptoContextProvider>
  )
}
