import React, { Component } from "react";
import { Section, Title, SecttionButton } from "../../utils";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../utils";

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            voluptas! Aliquid voluptatum praesentium velit ipsam, magnam culpa
            dolor necessitatibus unde ut quaerat id autem nihil magni in
            molestiae veritatis blanditiis doloribus sint quo alias eveniet
            repellendus. Dolores rerum doloremque ut nam distinctio vel debitis,
            deleniti, officiis vero quia amet magnam.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SecttionButton style={{ margin: "2rem auto" }}>
              about
            </SecttionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;
