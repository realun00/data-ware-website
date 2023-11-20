import { RouterProvider } from 'react-router-dom';

// import i18n
import 'translations';

// import router
import router from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
