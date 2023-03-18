import ReactDOM from 'react-dom/client';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

import { GlobalProvider } from './context';

bridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root')).render(<GlobalProvider><App /></GlobalProvider>);

if (process.env.NODE_ENV === 'development') {
  import('./eruda');
}
