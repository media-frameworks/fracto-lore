import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PageMediaStyles as styles} from "../styles/PageMediaStyles";
import {MediaElementTypes} from "./MediaElementTypes";
import {MediaImageField} from "./MediaImageField";

export class MediaElementField extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
      media_type: PropTypes.string.isRequired,
   }

   state = {
      field_width: 0,
   }

   componentDidMount() {
      const {width_px} = this.props
      this.setState({field_width: width_px - 2 * styles.PANE_MARGIN_PX})
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      const {width_px} = this.props
      if (width_px !== prevProps.width_px) {
         this.setState({field_width: width_px - 2 * styles.PANE_MARGIN_PX})
      }
   }

   render() {
      const {field_width} = this.state
      const {media_type} = this.props
      let media = []
      switch (media_type) {
         case MediaElementTypes.FRACTO_IMAGE:
            media = <MediaImageField width_px={field_width}/>
            break;
         default:
            break;
      }
      return <styles.CommonWrapper>
         {media}
      </styles.CommonWrapper>
   }
}

export default MediaElementField

