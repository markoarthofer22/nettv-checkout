import { useState, useCallback } from 'react';

function useModal(initialValue = false) {
    const [toggle, setToggle] = useState(initialValue);
  
    return [toggle, useCallback(() => setToggle(status => !status), [])];
  }
  
  export default useModal;