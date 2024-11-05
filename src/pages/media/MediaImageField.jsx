import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FractoRasterImage from "fracto/render/FractoRasterImage";

const IMAGE_WIDTH_PX = 750

export class MediaImageField extends Component {

   static propTypes = {
      width_px: PropTypes.number.isRequired,
   }

   state = {
      scope: 2.5,
      focal_point: {
         x: 0.5 - 1.25,
         y: 0.125
      },
      in_wait: false,
      image_ref: React.createRef()
   };

   componentDidMount() {
      document.addEventListener('keydown', this.key_handler);
   }

   key_handler = (key) => {
      const {scope, in_wait} = this.state
      if (in_wait) {
         return;
      }
      if (key.code === "Escape" && !key.shiftKey) {
         this.setState({scope: scope / 0.618, in_wait: true})
      } else if (key.code === "Enter" && key.shiftKey) {
         this.setState({scope: scope / 1.618, in_wait: true})
      }
   }

   on_plan_complete = () => {
      this.setState({in_wait: false})
   }

   on_focal_point_changed = (new_focal_point) => {
      const {in_wait} = this.state
      if (in_wait) {
         return;
      }
      this.setState({
         focal_point: new_focal_point,
         in_wait: true,
      })
   }

   on_click = (e) => {
      const {scope, focal_point, image_ref, in_wait} = this.state
      if (!image_ref.current || in_wait) {
         return;
      }
      const container_bounds = image_ref.current.getBoundingClientRect()
      const img_x = Math.floor(e.clientX - container_bounds.left)
      const img_y = Math.floor(e.clientY - container_bounds.top)
      const leftmost = focal_point.x - scope / 2
      const topmost = focal_point.y + scope / 2
      const increment = scope / IMAGE_WIDTH_PX
      this.setState({
         focal_point: {
            x: leftmost + increment * img_x,
            y: topmost - increment * img_y,
         },
         in_wait: true,
      })
   }

   render() {
      const {scope, focal_point, in_wait, image_ref} = this.state
      const image_field = <div
         onClick={this.on_click}
         ref={image_ref}>
         <FractoRasterImage
            width_px={IMAGE_WIDTH_PX}
            scope={scope}
            focal_point={focal_point}
            on_plan_complete={this.on_plan_complete}
            disabled={in_wait}
         />
      </div>
      return [image_field]
   }
}

export default MediaImageField
