import styled from "styled-components";
import {CoolColors, CoolStyles} from "common/ui/CoolImports";

export class PageMediaStyles {

   static PANE_MARGIN_PX = 10;

   static CommonWrapper = styled(CoolStyles.Block)`
      margin: 10px;
   `

   static NewItemPlaceholder = styled(CoolStyles.InlineBlock)`
      ${CoolStyles.pointer}
      ${CoolStyles.narrow_box_shadow}
      ${CoolStyles.align_middle}
      width: 161px;
      height: 50px;
      border: 2px solid #444444;
      margin: 0.5rem;
      border-radius: 0.25rem;
      background-color: #eeeeee;
      padding-top: 10px;
   `

   static NewItemPromptSpan = styled.span`
      ${CoolStyles.uppercase}
      ${CoolStyles.bold}
      color: #888888;
      font-size: 0.9rem;
   `;
}

export default PageMediaStyles
