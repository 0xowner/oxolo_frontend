import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import History from '../pages/History.component';
import Logs from '../pages/Logs.component';
import MainPlayer from '../pages/MainPlayer.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPlayer />,
      },
      {
        path: 'History',
        element: <History />,
      },

      {
        path: 'Logs',
        element: <Logs />,
      },
    ],
  },
]);

export default router;
