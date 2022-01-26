import { Route, Routes } from 'react-router';
import Chat from './page/Chat';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
     <Routes>
      <Route path="*" element={<Chat />} />
     </Routes>
    </div>
   )
};

export default App;
