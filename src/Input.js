const Input = (props) => {

    return (
    <section>
        <div className="wrapper mainSec">
            <form onSubmit={ props.handleSubmit }>
            <label className="label" htmlFor="search">Search for weather by Canadian City:</label>
                <div className='searchAndButton'>
                    <input className="cityInput" type="text" id="search" placeholder="Search For Your Canadian City's Current Weather" onChange={ props.handleInput } value={props.userInput} aria-required="true" required />
                    <button className="submitButton" aria-label="Submit your city's name for current weather">Is It Sweater Weather?</button>
                </div>
            </form>
        </div>
    </section>
)
}

export default Input;