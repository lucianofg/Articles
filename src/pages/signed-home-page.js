import React from "react";
import {useState} from "react";
import PurchasedArticles from "./components/purchased-articles";
import Dashboard from "./components/dashboard";
import WrittenArticles from "./components/written-articles";

export default function SignedHomePage() {
    const [content, setContent] = useState("dashboard")

    return (
        <div>
            <h1>Signed home page</h1>
            <div>
                {
                   (content === "dashboard") ?
                       <Dashboard /> :
                       (content === "purchased") ?
                           <PurchasedArticles /> :
                           <WrittenArticles />
                }
            </div>
            <div>
                <h1>Sidebar</h1>
                <div onClick={() => setContent("written")}>
                    Articles that you wrote
                </div>
                <div onClick={() => setContent("dashboard")}>
                    Dashboard
                </div>
                <div onClick={() => setContent("purchased")}>
                    Purchased articles
                </div>
            </div>
        </div>
    )
}