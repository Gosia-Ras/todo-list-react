import { StyledLayout, StyledSection, StyledSectionBody } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledLayout>
      <h2>{title}</h2>
      {extraHeaderContent}
    </StyledLayout>
    <StyledSectionBody taskcount>{body}</StyledSectionBody>
  </StyledSection>
);

export default Section;
