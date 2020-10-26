import React, { useState, useEffect } from 'react';

import Contact from './view/Contact';

const ContactContainer = ({ collaborators, contributors }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);
  return (
    <Contact
      collaborators={collaborators}
      contributors={contributors}
      visible={visible}
    />
  );
};

export default ContactContainer;
