//import  { useState } from 'react';
//import '../App.css';
import '../style/ViewBlog.css';

let blogBody = "";
let blogHeading = "";
export function viewBlogBody(textArea){
    blogBody = textArea;
   // console.log("bolgbody"+textArea)
}

export function viewBlogHeading(selectedValue){
    blogHeading = selectedValue;
}
export default function ViewBlog(){
  

    return (
        <>
        <header>
            Welcome home!
        </header>
        <div className="view-blog">
          <h1>{blogHeading}</h1>
          <p>{blogBody}</p>
        </div>
        <footer>
          <p>&copy; 2024 Geetashree. All Rights Reserved.</p>
        </footer>
        </>
    );
}

