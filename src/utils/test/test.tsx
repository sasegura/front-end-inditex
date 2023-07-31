import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const TestWrapper = ({
  children,
  url = '/',
  path = '*',
}: {
  children: React.ReactNode;
  url?: string;
  path?: string;
}) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <MemoryRouter initialEntries={[url]}>
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </MemoryRouter>
    </PersistQueryClientProvider>
  );
};
