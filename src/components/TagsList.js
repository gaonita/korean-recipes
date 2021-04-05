import React from 'react';
import setupTags from "../utils/setupTags";
import {Link} from "gatsby"
import styled from "styled-components";

const TagsList = ({recipes}) => {
    const newTags = setupTags(recipes)
    return (
        <Wrapper>
            <div className={"tags-container"}>
                <h5>Recipes</h5>
                <div className={"tags-list"}>
                    {newTags.map((tag, index) => {
                        const [text, value] = tag
                        return <Link key={index} to={`/${text}`}>{text}({value})</Link>
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  .tags-container {
    order: 1;
    display: flex;
    flex-direction: column;
  }

  .tags-list {
    display: flex;
    flex-direction: column;
    //grid-template-columns: 1fr 1fr 1fr;
  }


  .tags-container h5 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .tags-list a {
    font-size: 14px;
    text-transform: capitalize;
    display: block;
    color: var(--grey-800);
    transition: var(--transition);
  }

  .tags-list a:hover {
    color: var(--primary-500);
  }

  @media screen and (max-width: 992px) {
    .tags-container {
      order: 0;
    }
    .tags-list {
      display: grid;
     grid-template-columns: 1fr 1fr 1fr;
    }
  }
`


export default TagsList;