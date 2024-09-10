import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PageMainStyles as styles} from "../styles/PageMainStyles";

export class LeftPaneSelector extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
      all_sections: PropTypes.array.isRequired,
      selected_section: PropTypes.string.isRequired,
      on_section_change: PropTypes.func.isRequired,
   }

   render() {
      const {all_sections, selected_section, on_section_change} = this.props
      const sections = all_sections.map((section, i) => {
         const key = `section-${i}`
         const section_title = section.id === selected_section
            ? <styles.SectionTitleSelected key={key}>
               {section.name}
            </styles.SectionTitleSelected>
            : <styles.SectionTitle
               key={key}
               onClick={() => on_section_change(section.id)}>
               {section.name}
            </styles.SectionTitle>
         return <styles.SectionTitleWrapper>
            {section_title}
         </styles.SectionTitleWrapper>
      })
      return <styles.SectionWrapper>
         {sections}
      </styles.SectionWrapper>
   }
}

export default LeftPaneSelector
