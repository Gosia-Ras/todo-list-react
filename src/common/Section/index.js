import { StyledLayout, StyledSection, StyledSectionBody, SectionHeader } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledLayout>
      <SectionHeader>{title}</SectionHeader>
      {extraHeaderContent}
    </StyledLayout>
    <StyledSectionBody taskcount>{body}</StyledSectionBody>
  </StyledSection>
);

export default Section;
