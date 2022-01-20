const Input = (props) => {

    return (
    <main>
        <div className="wrapper mainSec">
            <form onSubmit={ props.handleSubmit }>
            <label className="label" htmlFor="search">Hey all you Juno Alum! Is it Sweater Weather Today? </label>
            <input className="cityInput" type="text" id="search" placeholder="Search For Your Canadian City's Current Weather" onChange={ props.handleInput } value={props.userInput} aria-required="true" required />
            <button className="submitButton" onClick = {props.handleClick} type="submit" aria-label="Submit your city's name for current weather">Is It Sweater Weather?</button>
            </form>
        </div>
    </main>
    )
}

export default Input