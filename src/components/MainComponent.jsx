
import EmailToolbarComponent from './emailViewMainBody/EmailToolbarComponent'
import EmailBodyComponent from './emailViewMainBody/EmailBodyComponent'
import EmailActionsComponent from './emailViewMainBody/EmailActionsComponent'
import EmailContentHeaderComponent from './emailViewMainBody/EmailContentHeaderComponent'
function MainComponent(){
    return(
        <main className="email-view">
        <EmailToolbarComponent/>


        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <EmailContentHeaderComponent/>


          <EmailBodyComponent/>
          <EmailActionsComponent/>

        </article>
      </main>
    )
}

export default MainComponent