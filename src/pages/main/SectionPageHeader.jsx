import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PageMainStyles as styles} from "../styles/PageMainStyles";
import ReactTimeAgo from "react-time-ago";

export class SectionPageHeader extends Component {

   static propTypes = {
      section_name: PropTypes.string.isRequired,
      item_meta: PropTypes.string,
      on_select_item: PropTypes.func,
      on_create_item: PropTypes.func,
   }

   state = {}

   componentDidMount() {
   }

   render_details = () => {
      const {item_meta} = this.props
      return <styles.DetailsBasis>
         <styles.ElementTitleSpan>"{item_meta.title}"</styles.ElementTitleSpan>
         <styles.CommaBreak/>
         <styles.NumericSpan>[{item_meta.id}]</styles.NumericSpan>
         <styles.CommaBreak/>
         last modified: <ReactTimeAgo date={item_meta.updated_at}/>
      </styles.DetailsBasis>
   }

   render = () => {
      const {section_name, on_select_item, on_create_item, item_meta} = this.props
      const element_details = item_meta
         ? this.render_details()
         : <styles.DetailsBasis>{'none selected'}</styles.DetailsBasis>
      const select_prompt = <styles.PromptLink
         onClick={on_select_item}
         key={'select-prompt'}>
         select
      </styles.PromptLink>
      const create_prompt = <styles.PromptLink
         onClick={on_create_item}
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
         <styles.TitleSpan>{section_name}</styles.TitleSpan>
         {element_details}
         <styles.RightAlignedHeader>{complete_message}</styles.RightAlignedHeader>
      </styles.HeaderBlock>
   }
}

export default SectionPageHeader
