import React from 'react';
import { connect } from 'react-redux';

import { generateRandomText } from '../../actions';
import styles from './button.scss';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    this.props.generateRandomText('pepe');
  }
  render() {
    return (
      <button onClick={this.onButtonPress} className={styles.default}>Click me!</button>
    );
  }

}

Button.propTypes = {
  generateRandomText: React.PropTypes.func,
};


export default connect(null, { generateRandomText })(Button);
