import React from 'react';

import Button from '../button';
import Box from '../box';
import styles from './templatecomponent.scss';


class TemplateComponent extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <span className={styles.text}>
            React App Template
          </span>
        </div>
        <Button />
        <Box />
      </div>
    );
  }
}

export default TemplateComponent;
