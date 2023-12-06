import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

function QuoteSection() {
    return (
        <div className='section quote'>
            <p className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Food is everything we are. It's an extension of nationalist feeling.
                ethic feeling yorur personal history. your province, your region, your tribe,
                your grandma. it's an inseparable from those from the get to-go
            </p>
            <p className="quote-author">~Anthony Bourdain</p>
        </div>
    )
}

export default QuoteSection