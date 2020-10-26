import React, { useState, useEffect } from 'react';

import Contact from './view/Contact';

const title = 'WE ALWAYS RUN BY YOU\nTO MAKE PERFECT MARATHON';

const ContactContainer = ({ collaborators, contributors }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);
  return (
    <Contact
      title={title}
      collaborators={collaborators}
      contributors={contributors}
      visible={visible}
    />
  );
};

export default ContactContainer;
