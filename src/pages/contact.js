import React from 'react';
import styled from "styled-components";
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

function Contact({data: {allContentfulRecipe: {nodes: recipes}}}) {
    return (
        <Layout>
            <SEO title={"Contact"}/>
            <Wrapper>
                <main className="page">
                    <section className={"contact-page"}>
                        <article className={"contact-info"}>
                            <h3>Want to Get In Touch?</h3>
                            <p>If you have questions on these recipes while you are following or have tips
                                and tricks to make a dish even better that you would generously share with people,
                                please contact me.
                                Or if you are just going through bad homesick missing Korea or your hometown,
                                we can talk about it too. I know how tough it can be sometimes.

                            </p>
                        </article>
                        <article>
                            <form className="form contact-form"
                                  action="https://formspree.io/f/mjvjvyqp"
                                  method="POST">
                                <div className="form-row">
                                    <label htmlFor="name">name</label>
                                    <input type="text" name="name" id='name'/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">email</label>
                                    <input type="text" name="email" id='email'/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="name">message</label>
                                    <textarea name="message" id='message'/>
                                </div>
                                <div className={"form-container"}>
                                    <button type={"submit"}
                                            className={"btn"}>submit
                                    </button>
                                </div>
                            </form>
                        </article>
                    </section>

                    <section className={"featured-recipes"}>
                        <h5>More recipes coming soon!</h5>
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
  .contact-page {
    display: grid;
    gap: 2rem 3rem;
    padding-bottom: 3rem;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media screen and (min-width: 992px) {
    .contact-page {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }

  .featured-recipes > h5 {
    text-align: center;
    max-width: 100%;
  }

`
export default Contact;