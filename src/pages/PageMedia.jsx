import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from "react-time-ago";

import {PageMediaStyles as styles} from "./styles/PageMediaStyles";
import MediaElementData from "./media/MediaElementData";
import {MediaElementTypes} from "./media/MediaElementTypes";
import MediaElementField from "./media/MediaElementField";

export class PageMedia extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   state = {
      media_element_id: -1,
      media_element: null,
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

   static render_details = (media_element) => {
      return <styles.DetailsBasis>
         <styles.ElementTitleSpan>"{media_element.meta.title}"</styles.ElementTitleSpan>
         <styles.CommaBreak/>
         <styles.NumericSpan>[{media_element.id}]</styles.NumericSpan>
         <styles.CommaBreak/>
         last modified: <ReactTimeAgo date={media_element.updated_at}/>
      </styles.DetailsBasis>
   }

   render_header = () => {
      const {media_element} = this.state
      const element_details = media_element
         ? PageMedia.render_details(media_element) : ''
      const select_prompt = <styles.PromptLink
         onClick={this.on_select_media}
         key={'select-prompt'}>
         select
      </styles.PromptLink>
      const create_prompt = <styles.PromptLink
         onClick={this.on_create_media}
         key={'create-prompt'}>
         create
      </styles.PromptLink>
      const complete_message = [
         select_prompt,
         <styles.CommaBreak/>,
         'or',
         <styles.CommaBreak/>,
         create_prompt,
         <styles.CommaBreak/>,
         'some'
      ]
      return <styles.HeaderBlock key={'common-header'}>
         <styles.TitleSpan>Media</styles.TitleSpan>
         {element_details}
         <styles.RightAlignedHeader>{complete_message}</styles.RightAlignedHeader>
      </styles.HeaderBlock>
   }

   on_select_media = () => {
   }

   on_create_media = () => {
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
      const {width_px} = this.props
      const header = this.render_header()
      const element_field = <MediaElementField width_px={width_px}/>
      return [header, element_field]
   }
}

export default PageMedia
