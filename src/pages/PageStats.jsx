import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class PageStats extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   render() {
      const {width_px} = this.props
      return `PageStats ${width_px}`
   }
}

export default PageStats
