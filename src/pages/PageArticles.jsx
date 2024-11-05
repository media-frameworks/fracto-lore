import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SectionPageHeader from "./main/SectionPageHeader";

export class PageArticles extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   render() {
      const {width_px} = this.props
      const header = <SectionPageHeader
         section_name={'articles'}
      />
      return [header]
   }
}

export default PageArticles
