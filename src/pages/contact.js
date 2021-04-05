import React from 'react';
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

function Contact({data:{allContentfulRecipe:{nodes:recipes}}}) {
    return (
        <Layout>
            <SEO title={"Contact"}/>
            <main className="page">
                <section className={"contact-page"}>
                    <article className={"contact-info"}>
                        <h3>Want to Get In Touch?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nemo officiis rem. Aliquam
                            aliquid
                            assumenda blanditiis, corporis dolores dolorum eos laudantium quas repellat sequi? Enim
                            magni
                            nam quidem ut voluptate?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nemo officiis rem. Aliquam
                            aliquid
                            assumenda blanditiis, corporis dolores dolorum eos laudantium quas repellat sequi? Enim
                            magni
                            nam quidem ut voluptate?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nemo officiis rem. Aliquam
                            aliquid
                            assumenda blanditiis, corporis dolores dolorum eos laudantium quas repellat sequi? Enim
                            magni
                            nam quidem ut voluptate?</p>
                    </article>
                    <article>
                        <form className="form contact-form"
                              action="https://formspree.io/f/mjvjvyqp"
                              method="POST"
                        >
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id='name'/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your name</label>
                                <input type="text" name="email" id='email'/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <textarea name="message" id='message'/>
                            </div>
                            <button type={"submit"} className={"btn block"}>submit</button>
                        </form>
                    </article>
                </section>

                <section className={"featured-recipes"}>
                    <h5>Look at this sources!</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
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

export default Contact;