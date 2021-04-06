import React from 'react';
import styled from "styled-components";
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import {Link, graphql} from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";


function About({data: {allContentfulRecipe: {nodes: recipes}}}) {
    return (
        <Layout>
            <SEO title={"About"}/>
            <Wrapper>
                <main className={"page"}>
                    <section className={"about-page"}>
                        <article>
                            <h2>Korean cuisine</h2>
                            <p>Hi, I'm Gaon who was born and raised in Seoul and 
                                have moved in Europe about 5 years ago. 
                                I've settled comfortably into new environment and culture except 
                                that I often get irresistible cravings for Korean foods which is not so accessible in where I live.
                                So I'v been learning recipes and cooking Korean dishes at home. 
                                Here I share the recipes I found simple but great for someone who needs Korean soul food like I did.
                            </p>
                            <Link to={"/contact"} className={"contact"}>
                                Contact
                            </Link>
                        </article>
                        <StaticImage src="../assets/images/seoul.jpg"
                                     alt={"person pouring salt in bowl"}
                                     className={"about-img"}
                                     placeholder={"blurred"}
                        />
                    </section>
                    <section className={"featured-recipes"}>
                        <h5 style={{marginTop:16, alignSelf:'center'}}>More delicious coming soon </h5>
                        <RecipesList recipes={recipes}/>
                    </section>
                </main>
            </Wrapper>
        </Layout>
    );
}

export const query = graphql`
  {
    allContentfulRecipe(
      filter: {featured: {eq: true}}
      sort: {fields: title, order: ASC}
    ) {
      nodes {
        prepTime
        id
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const Wrapper = styled.section`

  .about-page h2 {
    text-transform: none;
    font-weight: bold;
  }
  .about-page {
    display: grid;
    gap: 2rem 4rem;
    padding-bottom: 3rem;
  }
  .featured-recipes{
    display: flex;
    flex-direction: column;
  }
  .about-img {
    border-radius: var(--borderRadius);
    height: 500px;
  }
  .contact {
    text-decoration:underline;
    font-weight: bold;
    color: black;
  }
  @media screen and (min-width: 992px) {
    .about-page {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      height: 400px;
    }

    .about-img {
      height: 100%;
    }
  }

`


export default About;
