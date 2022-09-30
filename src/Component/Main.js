import React from "react";
//import { ReactDOM } from "react";

export default function Main() {
    function handleClick() {
       alert('Hi 😊 click on the down botton of my examples')
       
       
        

    }
    return (
        <div className="container">
            <h1>
                Advantage of being in Tech as a woman
            </h1>
            <p className="intro">
                The tech world is now the most fast moving training and it is an
                important area of <br />
                something <em>one should invest his/her time and resources</em> but i wil be
                focusing on the female in this area of discussion.
                <br />
            </p>
            <h4>Who can learn / should be in tech ?</h4>
            <p> Anyone can be !!  be it old,young, working or not ,single or married, children or no
                children.
            </p>

            <h2>why tech for woman ?</h2>

            <img src="./images/mothers.jpg" alt="" />
            <p>
                In most cultures women are seen to play a very vital roles in taking <br />
                care of the family and also building up morals, values etc to the next
                generation (children). <br />
                that means more time is required for them to be  around the young ones. <br />
                having career in tech makes it possible for one
                to do that in the sense one can work from home and do other things. <br />
                <strong>   Does that mean am againt women shipping in to other careers ? </strong><br />
                No not at all
                but in our morden time no matter the career one is into , it is good to
                be knowledgeable in Tech .
            </p>
            <p>
                <span> Examples </span> of workshops / programmes for women <br />
                lulugreg: <a href="/">lulugreg</a> <br/>
                Shecodes: <a href="https://www.shecodes.io">visit shecodes workshops</a>
            </p>
            <br />
            <button onClick={handleClick}>
                More infor
            </button>
            <br /><span> Examples </span> of workshops / programmes for women <br />
            :
            <a href="/"> visit zuri</a> <br/>
            shecodes Africa


            <footer>
                coded by Ameh Lucy Ajumi 🥰
            </footer>
        </div>
    );

}