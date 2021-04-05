import React from 'react';
import Layout from "../components/Layout";
import {graphql, Link} from "gatsby";
import setupTags from "../utils/setupTags";
import SEO from "../components/SEO";
import styled from "styled-components";

function Tags({data}) {
    const newTags = setupTags(data.allContentfulRecipe.nodes)
    return (
        <Layout>
            <SEO title={"Tags"}/>
            <Wrapper>
                <main className={"page"}>
                    <section className={"tags-page"}>
                        {newTags.map((tag, index) => {
                            const [text, value] = tag
                            return <Link to={`/${text}`} key={index} className={"tag"}>
                                <h5>{text}</h5>
                                <p>{value} recipe</p>
                            </Link>
                        })}
                    </section>
                </main>
            </Wrapper>
        </Layout>
    );
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Wrapper = styled.section`
  .tags-page {
    display: grid;
    gap: 1rem;
    padding-bottom: 3rem;
  }

  .tag {
    background: #faf7f7;
    border-radius: var(--borderRadius);
    text-align: center;
    color: #949494;
    transition: var(--transition);
    padding: 5rem 0;
  }

  .tag:hover {
    background: var(--primary-500);
    color: #f6f6f6;
  }

  .tag h5,
  .tag p {
    margin-bottom: 0;
  }

  .tag h5 {
    font-weight: 600;
  }

  @media screen and (min-width: 576px) {
    .tags-page {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    .tags-page {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default Tags;