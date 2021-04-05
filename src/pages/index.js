import React from "react"
import styled from "styled-components";
import Layout from '../components/Layout'
import {StaticImage} from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

const Home = () => (
    <Layout>
        <Wrapper>
            <SEO title={"Home"}/>
            <main className={"page"}>
                <header className={"hero"}>
                    <StaticImage src={"../assets/images/main.jpg"}
                                 alt={"flour"}
                                 className={"hero-img"}
                                 placeholder={"tracedSVG"}
                                 layout={"fullWidth"}
                    />
                    <div className={"hero-container"}>
                        <div className={"hero-text"}>
                            <h1> Simple Korean Recipes</h1>
                            <h5> 간단한 한국 음식 조리법 모음</h5>
                        </div>
                    </div>
                </header>
                <AllRecipes/>
            </main>
        </Wrapper>
    </Layout>
)

const Wrapper = styled.section`

  .hero-img {
    height: 100%;
    border-radius: var(--borderRadius);
  }

  .hero {
    height: 30vh;
    position: relative;
    margin-bottom: 2rem;
  }

  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: var(--borderRadius);
  }

  .hero-text {
    color: var(--white);
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    .hero-text h1 {
      font-size: 4rem;
      margin-bottom: 0;
    }
  }
`

export default Home
