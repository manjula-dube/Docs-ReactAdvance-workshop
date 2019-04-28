import React, { Component } from 'react';
import { connect } from "react-redux";
import { getHeaderHeightState } from '../../store/selectors';

class Container extends Component {
  render() {
    const {
      sidebarDocked, 
      headerHeight, 
      onPostPage, 
    } = this.props;

    return (
      <div
        style={{
          position: "absolute",
          top: (!sidebarDocked && onPostPage) ? headerHeight + 70: headerHeight,
          left: ((!sidebarDocked && onPostPage) || !onPostPage) ? 0 : "20%",
          right: ((!sidebarDocked && onPostPage) || !onPostPage) ? 0 : "15%",
          bottom: 0,
          overflow: !sidebarDocked ? "auto" : "visible",
          
        }}
      >
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    headerHeight: getHeaderHeightState(state),
  }
}

export default connect(mapStateToProps) (Container);