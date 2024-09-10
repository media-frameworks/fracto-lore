import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LeftPaneSelector from "./LeftPaneSelector";
import {PageMainStyles as styles} from "../styles/PageMainStyles";

export class MainLeftPane extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
      all_sections: PropTypes.array.isRequired,
      selected_section: PropTypes.string.isRequired,
      on_section_change: PropTypes.func.isRequired,
   }

   state = {
      field_width: 0,
   }

   componentDidMount() {
      const {width_px} = this.props
      this.setState({field_width: width_px - 2 * styles.PANE_MARGIN_PX})
   }

   render() {
      const {field_width} = this.state
      const {all_sections, selected_section, on_section_change} = this.props
      return [
         <LeftPaneSelector
            width_px={field_width}
            all_sections={all_sections}
            selected_section={selected_section}
            on_section_change={on_section_change}
         />
      ]
   }
}

export default MainLeftPane
