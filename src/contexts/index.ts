import { createContext } from 'react';

import rootStore from '../stores/Root';

export const StoreContext = createContext(rootStore);
