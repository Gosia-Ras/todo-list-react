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
            Cat mom &#128062; living in <strong>Switzerland</strong> with a goal
            of becoming a <strong>front-end developer</strong>. I love food
            &#127836; and becoming a cook will be my backup if coding doesn't
            work out &#128521;.{" "}
          </p>
          <p>
            In my free time I play video games and like to dabble in{" "}
            <em>smartphone photography</em> and post it on my Instagram account
            @diary_of_gosia.
          </p>
        </>
      }
    />
  </Container>
);
