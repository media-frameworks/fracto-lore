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
   static HeaderBlock = styled(CoolStyles.Block)`
      border-bottom: 0.25rem solid #cccccc;
      letter-spacing: 0.25rem;
      margin-bottom: 0.25rem;
   `

   static TitleSpan = styled.span`
      ${CoolStyles.bold}
      ${CoolStyles.uppercase}
      color: ${CoolColors.deep_blue};
      font-size: 1.5rem;
      margin-right: 0.5rem;
   `
   static PromptLink = styled(CoolStyles.LinkSpan)`
      font-size: 1rem;
   `
   static CommaBreak = styled(CoolStyles.InlineBlock)`
      margin-right: 0.25rem;
   `
   static DetailsBasis = styled(CoolStyles.InlineBlock)`
      ${CoolStyles.italic}
      ${CoolStyles.align_bottom}
      letter-spacing: 0;
      color: #888888;
      font-size: 0.90rem;
      line-height: 1.5rem;
   `

   static ElementTitleSpan = styled.span`
      ${CoolStyles.bold}
      font-size: 1.125rem;
      color: black;
   `

   static NumericSpan = styled.span`
      ${CoolStyles.bold}
      ${CoolStyles.monospace}
      font-size: 1rem
   `

   static RightAlignedHeader = styled(PageMainStyles.DetailsBasis)`
      float: right;
      line-height: 2rem;
   `
}

export default PageMainStyles
