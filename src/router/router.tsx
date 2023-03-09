import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import History from '../pages/History/History.component';
import Player from '../pages/Player/Player.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Player />,
      },
      {
        path: 'History',
        element: <History />,
      },
    ],
  },
]);

export default router;
