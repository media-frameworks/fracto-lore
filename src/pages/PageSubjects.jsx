import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SectionPageHeader from "./main/SectionPageHeader";
import {CoolDropdown} from "../common/ui/CoolImports";

const SUBJECT_FREE_BAILIWICKS = 'subject_free_bailiwicks'
const SUBJECT_INLINE_BAILIWICKS = 'subject_inline_bailiwicks'
const SUBJECT_POINTS_OF_INTEREST = 'subject_points_of_interest'

const SUBJECTS_MENU = [
   {label: "bailiwicks (free)", code: SUBJECT_FREE_BAILIWICKS},
   {label: "bailiwicks (inline)", code: SUBJECT_INLINE_BAILIWICKS},
   {label: "points of interest", code: SUBJECT_POINTS_OF_INTEREST},
]

export class PageSubjects extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   state = {
      select_dropdown: [],
      selected_subject: 'no selection',
   }

   on_select_item = () => {
      const {width_px} = this.props
      const select_dropdown = <CoolDropdown
         items={SUBJECTS_MENU}
         reference_rect={{top: '65px', right: `100px`}}
         callback={selected => this.setState({
            selected_subject: selected, select_dropdown: []
         })}
      />
      this.setState({select_dropdown})
   }

   on_create_item = () => {
      alert('on_create_item')
   }

   render() {
      const {select_dropdown, selected_subject} = this.state
      const header = <SectionPageHeader
         section_name={'subjects'}
         on_select_item={this.on_select_item}
         on_create_item={this.on_create_item}
      />
      return [header, select_dropdown,selected_subject]
   }
}

export default PageSubjects
