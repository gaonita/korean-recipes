import React from 'react';
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

function Recipes(props) {
    return (
        <Layout>
            <SEO title={"Recipes"}/>
            <main className={"page"}>
            <AllRecipes/>
            </main>
        </Layout>
    );
}

export default Recipes;