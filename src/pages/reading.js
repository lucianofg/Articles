import React, {useState} from "react";
import {OkayButton} from "../components/buttons";
import {FullArticle, PreviewArticle} from "../components/articles";

export default function Reading(props) {
    function userHasArticle(id) {
        // TODO
        return true
    }

    return (
        <div>
            {
                userHasArticle(props.article.id) ?
                    <FullArticle article={props.article} /> :
                    <PreviewArticle article={props.article} />
            }
        </div>
    )
}