import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MediaElementData from "./media/MediaElementData";
import {MediaElementTypes} from "./media/MediaElementTypes";
import MediaElementField from "./media/MediaElementField";
import SectionPageHeader from "./main/SectionPageHeader";
import {CoolDropdown} from "../common/ui/CoolImports";

const TYPES_MENU = [
   {label: "image", code: MediaElementTypes.FRACTO_IMAGE},
]

export class PageMedia extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   state = {
      media_element_id: -1,
      media_element: null,
      media_type: null,
      types_dropdown: []
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      const {media_element, media_element_id} = this.state
      if (media_element_id > 0 && media_element === null) {
         this.get_media_element(media_element_id)
      }
   }

   get_media_element = (media_element_id) => {
      MediaElementData.fetch_media_element(media_element_id, media_element => {
         media_element.meta = JSON.parse(media_element.meta)
         media_element.data = JSON.parse(media_element.data)
         this.setState({media_element: media_element})
         console.log(`get_media_element (${media_element_id})`, media_element)
      })
   }

   select_media_type = (value) => {
      this.setState({media_type: value, types_dropdown: []})
   }

   on_create_media = (e) => {
      const bounds_rect = e.target.getBoundingClientRect()
      console.log('bounds_rect', bounds_rect)
      const types_dropdown = <CoolDropdown
         items={TYPES_MENU}
         reference_rect={{top: bounds_rect.top + 20, right: 45}}
         callback={this.select_media_type}
      />
      this.setState({types_dropdown})
   }

   on_save_new_media = () => {
      MediaElementData.save_media_element({
         type: MediaElementTypes.FILE,
         part_of: -1,
         meta: '{"title": "that which has yet to be named"}',
         data: '[]'
      }, result => {
         this.setState({
            media_element_id: result.insertId,
            media_element: null,
         })
         console.log(result)
      })
   }

   render() {
      const {types_dropdown, media_type} = this.state
      const {width_px} = this.props
      const header = <SectionPageHeader
         section_name={'media'}
         on_create_item={this.on_create_media}
         on_select_item={this.on_select_media}
      />
      const element_field = <MediaElementField
         media_type={media_type}
         width_px={width_px}
      />
      return [header, element_field, types_dropdown]
   }
}

export default PageMedia
