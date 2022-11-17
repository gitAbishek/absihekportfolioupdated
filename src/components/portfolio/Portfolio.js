import './portfolio.css'
import IMG1 from "../../assets/weatherApi.png"
import IMG2 from "../../assets/foodrecipee.png"
import IMG3 from "../../assets/todolist.png"
import IMG4 from "../../assets/githubapi.png"
import IMG5 from "../../assets/AbishekPortfolio.png"
import IMG6 from "../../assets/oldwebsite.png"
import IMG7 from "../../assets/keepclone.png"

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Weather API website',
        github: "https://www.github.com",
        demo: "https://shahweatherapi.netlify.app#"
    },
    {
        id: 2,
        image: IMG2,
        title: 'FoodRecipe App',
        github: "https://github.com/gitAbishek/FoodRecipeApp",
        demo: "https://foodrecipeapishah.netlify.app#"
    },
    {
        id: 3,
        image: IMG3,
        title: 'ToDoList',
        github: "https://github.com/gitAbishek/ToDoListNew",
        demo: "https://shahtodolist.netlify.app#"
    },
    {
        id: 4,
        image: IMG4,
        title: 'GitHubApi',
        github: "https://github.com/gitAbishek/GitHubApi",
        demo: "https://githubapishah.netlify.app#"
    },
    {
        id: 5,
        image: IMG5,
        title: 'My Portfolio',
        github: "https://github.com/gitAbishek/MyNewPortfolio",
        demo: "https://abishekshahnewportfolio.netlify.app#"
    },
    {
        id: 6,
        image: IMG6,
        title: 'My old Website',
        github: "https://github.com/gitAbishek/My-Website",
        demo: "https://webdeveloperabishek.netlify.app#"
    },
    {
        id: 7,
        image: IMG7,
        title: 'Google Keep Clone',
        github: "https://github.com/gitAbishek/Google-Keep-Clone",
        demo: "https://keepcloneabishek.netlify.app#"
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map((curdata) => {
                        return (
                            <article className="portfolio_item" key={curdata.id}>
                                <div className="portfolio_item-image">
                                    <img src={curdata.image} alt={curdata.title} className='imgheight' />
                                </div>
                                <h3>{curdata.title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={curdata.github} className='btn' target='_blank'>Github</a>
                                    <a href={curdata.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio