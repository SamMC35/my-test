import React from "react";
import './App.css'
import { useParams } from "react-router-dom";
import Axios from'axios'
import ReactMarkdown from "react-markdown"
import remarkReact from "remark-react/lib";
import {remark} from "remark";
import BlogRetriever from "./BlogRetriever";



function Blog(){

    return(<div className="content"><BlogRetriever /></div>)
}

export default Blog;