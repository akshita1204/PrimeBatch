import './SearchPage.css'
import Card from '../components/Card';
const cards=[
    {
        title:"Invitation",
        text:"You are invited"
    },
    {
        title:"Notice",
        text:"Have a look!"
    }
];
const SearchPage=()=>
    {
        return(
            <div className='searchpage'>
                <header>Logo</header>
                <main>
                    <h2>Search here...</h2>
                    <div >
                        {/* <div>
                            <h2>{cards[0].title}</h2>
                            <p>{cards[0].text}</p>
                        </div>
                        <div>
                            <h2>{cards[1].title}</h2>
                            <p>{cards[1].text}</p>
                        </div> */}

                        {cards.map((ele)=>
                        {
                            // return(
                            //   <div key={ele.title}>
                            //     <h2>{ele.title}</h2>
                            //     <label>{ele.text}</label>
                            //   </div>
                            // )
                            return <Card  key={ele.title} title={ele.title} text={ele.text}/>
                        })}

                    </div>
                    {/* <p>you can search..</p> */}
                </main>
                <footer>Copyright</footer>
            </div>
        )
    }
    export default SearchPage;

    //keys are used to provide a unique identity..