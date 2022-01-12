import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="About me" />
    <Section
      title="Gosia Ras"
      body={
        <>
          <p>
          &#128062; Cat mom living in <strong>Switzerland</strong> with a goal
            of becoming a <strong>front-end developer</strong>. This project is a part of my course at <strong>YouCode</strong>.
          </p>
          <p>
            In my free time I play video games and like to dabble in{" "}
            <em>smartphone photography</em> and post it on my IG 
          </p>
          <span><a style={{textDecoration: 'none', color: 'black'}} href="https://www.instagram.com/diary_of_gosia/" rel="noopener noreferrer" target="_blank">@diary_of_gosia</a></span>
        </>
      }
    />
  </Container>
);
