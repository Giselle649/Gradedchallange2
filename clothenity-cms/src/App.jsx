// ? import RouterProvider dari react-router-dom
import { RouterProvider } from 'react-router-dom';
import router from './routers';
 

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


