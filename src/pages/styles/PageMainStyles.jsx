import styled from "styled-components";
import {CoolColors, CoolStyles} from "common/ui/CoolImports";

export class PageMainStyles {

   static PANE_MARGIN_PX = 10;

   static CommonWrapper = styled(CoolStyles.Block)`
      padding: 0.5rem;
   `
   static SectionWrapper = styled(CoolStyles.Block)`
      margin-bottom: 0.5rem;
   `
   static SectionTitleWrapper = styled(CoolStyles.Block)`
      ${CoolStyles.noselect}
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
   `
   static SectionTitle = styled(CoolStyles.InlineBlock)`
      ${CoolStyles.pointer}
      ${CoolStyles.uppercase}
      letter-spacing: 0.125rem;
      padding: 0.125rem 0.5rem;
      margin-top: 0.5rem;
      background-color: #dddddd;
      color: ${CoolColors.deep_blue};
   `
   static SectionTitleSelected = styled(PageMainStyles.SectionTitle)`
      cursor: default;
      background-color: #666666;
      color: white;
   `
}

export default PageMainStyles
