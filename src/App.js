import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import View from './components/View'
import Edit from './components/Edit'
import Main from './components/Main';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {

  const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/view',
                element: <View />,
            },
            {
                path: '/edit',
                element: <Edit />,
            },
        ],
    },
    
])

  return (
    <Provider store={store}> 
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
