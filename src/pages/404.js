import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO";
import {StaticImage} from "gatsby-plugin-image";

export default function error() {
    return (
        <Layout>
            <SEO title={"Error"}/>
            <main className="error-page">
                <section>
                    <StaticImage src="../assets/images/seoul.jpg"
                                 alt={"person pouring salt in bowl"}
                                 style={{height:500}}
                                 placeholder={"blurred"}
                    />
                    <h2>404</h2>
                    <h5>Sorry 😥 there is no such page</h5>
                </section>
            </main>
        </Layout>
    )
}
