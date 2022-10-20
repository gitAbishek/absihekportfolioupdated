import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'This is a portfolio item title',
        github: "https://www.github.com",
        demo: "https://dribbble.com/shots/popular/animation#"
    },
    {
        id: 2,
        image: IMG2,
        title: 'This is a portfolio item title',
        github: "https://www.github.com",
        demo: "https://dribbble.com/shots/popular/animation#"
    },
    {
        id: 3,
        image: IMG3,
        title: 'This is a portfolio item title',
        github: "https://www.github.com",
        demo: "https://dribbble.com/shots/popular/animation#"
    },
    {
        id: 4,
        image: IMG4,
        title: 'This is a portfolio item title',
        github: "https://www.github.com",
        demo: "https://dribbble.com/shots/popular/animation#"
    },
    {
        id: 5,
        image: IMG5,
        title: 'This is a portfolio item title',
        github: "https://www.github.com",
        demo: "https://dribbble.com/shots/popular/animation#"
    },
    {
        id: 6,
        image: IMG6,
        title: 'This is a portfolio item title',
        github: "https://www.github.com",
        demo: "https://dribbble.com/shots/popular/animation#"
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
                                    <img src={curdata.image} alt={curdata.title} />
                                </div>
                                <h3>T{curdata.title}</h3>
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