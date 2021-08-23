import { useEffect } from 'react';
import { event } from './googleAnalytics';

const useHandleGoogleEvent = (eventName) => {
  const [item, setItem] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    setName(eventName);
  }, []);

  const sendEvent = () => {
    event({
      action: name,
      params: {
        ...item,
      },
    });
  };

  return { setItem, setName, sendEvent };
};

export default useHandleGoogleEvent;
