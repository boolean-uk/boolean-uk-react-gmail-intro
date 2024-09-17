import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
function Body(){
    return(
        <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
    )
}
export default Body