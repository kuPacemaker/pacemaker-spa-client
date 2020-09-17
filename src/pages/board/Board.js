import React from 'react';
import { Redirect } from 'react-router-dom';
import Board from 'components/board';
import { LocalMainPage } from 'local-path';

const BoardPage = ({ match }) => {
  const type = match.params.type;
  if (LocalMainPage.board.elements.hasOwnProperty(type))
    return <Board type={type} />;
  return (
    <Redirect path={LocalMainPage.root + '*'} to={LocalMainPage.newspeed} />
  );
};

export default BoardPage;
