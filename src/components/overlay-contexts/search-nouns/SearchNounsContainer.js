import React from 'react';
import { connect } from 'react-redux';
import Modal from '../default-modal';
import { show } from 'store/modules/creators/modal';

const title = 'SEARCH NOUNS\nIN THIS DOCUMENT?';
const body =
  'It will take few seconds.\nWhen the search is complete, it is displayed in bold text.';

const SearchNounsContainer = (props) => {
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        props.api({ document: props.payload }, (state, response) => {
          if (state) props.callbackHandler(response);
          else;
        });
        props.changeHandler();
      },
    },

    {
      name: 'NO',
      onClickHandelr: () => props.changeHandler(),
    },
  ];
  return (
    <Modal
      show={props.visible}
      changeHandler={props.changeHandler}
      title={title}
      body={body}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  api: modal.argument.api,
  payload: modal.argument.payload,
  callbackHandler: modal.argument.callbackHandler,
});

const mapDispatchToProps = (dispatch) => ({
  onShowWarningModal: (message) => dispatch(show('ERROR MODAL', { message })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchNounsContainer);
