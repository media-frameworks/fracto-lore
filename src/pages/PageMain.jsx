import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import AppPageMain from 'common/app/AppPageMain';
import {PageMainStyles as styles} from "./styles/PageMainStyles";
import MainLeftPane from "./main/MainLeftPane";

import PageStats from "./PageStats";
import PageMedia from "./PageMedia";

export const ID_SECTION_ARTICLES = 'id_section_articles'
export const ID_SECTION_SIDEBAR = 'id_section_sidebar'
export const ID_SECTION_GLOSSARY = 'id_section_glossary'
export const ID_SECTION_MEDIA = 'id_section_media'
export const ID_SECTION_STATS = 'id_section_stats'
export const ID_SECTION_SUBJECTS = 'id_section_subjects'

const ALL_SECTIONS = [
   {
      name: "Articles",
      id: ID_SECTION_ARTICLES,
   },
   {
      name: "Sidebars",
      id: ID_SECTION_SIDEBAR,
   },
   {
      name: "Glossary",
      id: ID_SECTION_GLOSSARY,
   },
   {
      name: "Media",
      id: ID_SECTION_MEDIA,
      component: PageMedia,
   },
   {
      name: "Stats",
      id: ID_SECTION_STATS,
      component: PageStats,
   },
   {
      name: "Subjects",
      id: ID_SECTION_SUBJECTS,
   },
]

export class PageMain extends Component {

   static propTypes = {
      app_name: PropTypes.string.isRequired,
   }

   state = {
      left_width: 200,
      right_width: 0,
      selected_section_id: ID_SECTION_ARTICLES,
      right_pane_ref: React.createRef(),
   };

   componentDidMount() {
      console.log('page ready')
   }

   on_resize = (left_width, right_width) => {
      console.log("on_resize", left_width, right_width)
      this.setState({
         left_width: Math.round(left_width),
         right_width: Math.round(right_width)
      })
   }

   set_selected_section = (new_selected_section_id) => {
      this.setState({selected_section_id: new_selected_section_id})
   }

   render() {
      const {left_width, right_width, selected_section_id, right_pane_ref} = this.state
      const {app_name} = this.props
      const section = ALL_SECTIONS.find(section => section.id === selected_section_id)
      const left_side = <styles.CommonWrapper>
         <MainLeftPane
            width_px={left_width}
            all_sections={ALL_SECTIONS}
            selected_section={selected_section_id}
            on_section_change={id => this.set_selected_section(id)}
         />
      </styles.CommonWrapper>

      const right_side = <styles.CommonWrapper
         key={'right-sidea'}
         ref={right_pane_ref}/>
      if (right_pane_ref.current && section.component) {
         const props ={width_px: right_width}
         ReactDOM.render(
            React.createElement(section.component, props),
            right_pane_ref.current);
      }
      return <AppPageMain
         app_name={app_name}
         on_resize={(left_width, right_width) => this.on_resize(left_width, right_width)}
         content_left={left_side}
         content_right={right_side}
      />
   }
}

export default PageMain;
