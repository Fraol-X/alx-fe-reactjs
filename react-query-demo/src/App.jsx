
import {QueryClient, QueryClientProvider} from 'react-query'
function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
    </QueryClientProvider>
  )
}

export default App