import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        GiftMe! <FontAwesomeIcon icon={faGift} />
      </div>
    );
  }
}

export default Logo;