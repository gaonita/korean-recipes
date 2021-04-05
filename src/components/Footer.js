import React from 'react';
import styled from 'styled-components'

function Footer(props) {
    return (
        <Wrapper>
            <footer className="page-footer">
                <p>&copy; {new Date().getFullYear()}
                    <span> Simply Korean </span>
                    Built with<a href={"https://www.gatsbyjs.com/"}> Gatsby</a>
                </p>
            </footer>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
  .page-footer {
    text-align: center;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
    color: var(--white);
  }

  .page-footer h5 {
    margin-bottom: 0;
  }

  .page-footer p {
    font-size: 14px;
    margin-bottom: 0;
  }

  .page-footer span,
  .page-footer a {
    color: var(--primary-500);
  }
`
export default Footer;