import React from 'react';
import { connect } from 'react-redux';

class Box extends React.Component {

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

Box.propTypes = {
  text: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  const { text } = state.messages;
  return { text };
};

export default connect(mapStateToProps)(Box);
