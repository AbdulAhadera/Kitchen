
function Footer() {
    return (
        <div className='footer'>
            <div style={{marginLeft:"40%",width:"60%"}} className="footer-section">
                <p className="title">Foodieshub.com</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia odio vel aperiam maiores nesciunt nisi, quae facilis autem ipsa?</p>
                <p>Any random date</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodieshus@gmail.com</p>
                <p>UN (+1 1111111)</p>
                <p>NYC , xyz</p>
            </div>
            <div className="footer-section">
                <p className="title">Social</p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p><a style={{ textDecoration: 'none', color: "white" }} href="https://github.com/AbdulAhadera">Github</a></p>
            </div>
        </div>
    )
}

export default Footer