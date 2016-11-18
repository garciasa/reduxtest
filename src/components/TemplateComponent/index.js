import React from 'react';

import Button from '../button';
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
      </div>
    );
  }
}

export default TemplateComponent;
