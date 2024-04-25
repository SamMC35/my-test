import React from "react";
import ReactMarkdown from "react-markdown"

function AboutThisPage(){

    const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch("test.md")
      .then(response => response.text())
      .then(setMarkdown)
      .catch(error => console.error('Error fetching Markdown:', error));
  }, []);
    return(
        <>
        <header>
            <h1>How I made this Website</h1>
        </header>
        <article>
            <p>For me, creating this website is an adventure in and of itself. By trade, I am a Java developer primarily focusing on the backend with barely any experience in the front-end (pun intended) of things. So I had to learn stuff to make this website into a reality.</p>
            <p>Tuesday, 23 April 2024 - Right now I have developed a skeleton for the website and kinda just realized that I need to blog this as well. Let's talk about the history and then the tech stack.</p>
            <h3>History</h3>
            <p>Since forever, I always wanted to make my own website for stuff like my blog, webcomic, or my writings. I did try back in 2017 using a domain from GoDaddy and Wordpress hosting but it became too expensive for my broke college ass. Then I made a free Wordpress account but I barely stayed to update it. Using these premade solutions never interested me, and I wanted full control over the ins and outs of the website which I didn't have the knowledge to pull it off.</p>
            <p>Now after finishing my college and having worked for 2 years in a tech job, I am finally confident enough to do it. Let's get into the tech stack.</p>
            <h3>Tech Stack</h3>
            <p>Tech stack basically means the technology you're using in a project in simple words. For this project, I am using the PERN stack, as in PostgreSQL, Express, React, and NodeJS.</p>
            <ul>
                <li><strong>PostgreSQL</strong> - I have the knowledge to actually use PGSql from work and it seemed like a no-brainer for this project to store my posts metadata.</li>
                <li><strong>Express and NodeJS</strong> - NodeJS is used to run server-side Javascript code and Express is used to build the APIs.</li>
                <li><strong>React</strong> - React is the frontend language I used for your viewing pleasures. Earlier I was just using HTML and CSS but I felt very limited using those. So then I decided to just use a framework to make my life a bit easier.</li>
            </ul>
            <h3>Hardware</h3>
            <p>For now, I have decided to run the database and the website on a Raspberry Pi 3B. I have one lying around so I just recycled it. For the traffic I am expecting, it will be enough to run the server without worrying about explosions.</p>
        </article>
        </>
    )
}

export default AboutThisPage;