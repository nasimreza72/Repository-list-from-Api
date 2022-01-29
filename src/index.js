import ReactDOM from "react-dom"
import App from "./App.jsx"
import moment from 'moment'


ReactDOM.render( < App / > , document.querySelector("#root"))


const sButton = document.querySelector("button")
const userInput = document.querySelector("input")

userInput.addEventListener("change", async () => {

    const res = await fetch(`https://api.github.com/users/${userInput.value}/repos`);
    const result = await res.json()
        .then(result => result.map(element => {
            let duration = moment(element.created_at, "YYYY-MM-DD").fromNow();
            console.log(element.name, "-         -", duration);

            const reponame1 = document.createElement("p")
            reponame1.append(element.name);

            const reponame2 = document.createElement("p")
            reponame2.append(duration);

            const div2 = document.createElement("section")
            div2.append(reponame1, reponame2);

            div2.style.display = "flex"
            div2.style.width = "30vw"
            div2.style.justifyContent = "space-between"
            div2.style.border = "1px solid gray"
            div2.style.margin = "1px"
            div2.style.padding = "0px 10px"
            document.querySelector("#post").prepend(div2);

        }))

})