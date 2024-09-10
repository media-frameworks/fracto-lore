import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PageMediaStyles as styles} from "../styles/PageMediaStyles";

export class MediaElementField extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   state = {
      field_width: 0,
   }

   componentDidMount() {
      const {width_px} = this.props
      this.setState({field_width: width_px - 2 * styles.PANE_MARGIN_PX})
   }

   render() {
      const {width_px} = this.props
      return <styles.CommonWrapper>
         {`MediaElementField ${width_px}`}
      </styles.CommonWrapper>
   }
}

export default MediaElementField

