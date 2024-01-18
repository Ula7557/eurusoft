import ContactPages2 from "../containers/contact/contactPages2";

const Ticket = () => {
    return (
      <div className="ticket container">
        {/* <iframe
          className="google_frame"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdlZMwnegUrfCxw7JarLynfJG_l-AycwIyLLEAVijC3La5-Og/viewform?embedded=true"
          width="640"
          height="1288"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
        <form action="">
          <div className="ticket_block_top">
            <h2 className="ticket_block_title">EUROSOFT TECH SUPPORT FORM</h2>
            <br />
            <p className="ticket_block_description">
              This is Eurosoft tech support form. Please create your ticket and
              no worries
            </p>
            <br />
            <p className="ticket_block_description">
              Please let us know, what is wrong or what can be better, try to
              give us as much information as possible. We will create the ticket
              and let you know.
            </p>
          </div>
          <div className="ticket_block_botton">
            <h2 className="ticket_block_bottom_title">Customer name? *</h2>
            <br />
            <p className="ticket_block_bottom_description">
              Please let us know your company name?
            </p>
            <br />
            <input
              type="text"
              placeholder="Мой ответ"
              className="ticket_block_bottom_input"
            />
          </div>
          <div className="ticket_block_botton">
            <h2 className="ticket_block_bottom_title">Your name, surname *</h2>
            <br />
            <input
              type="text"
              placeholder="Мой ответ"
              className="ticket_block_bottom_input"
            />
          </div>
          <div className="ticket_block_botton">
            <h2 className="ticket_block_bottom_title">
              Your email or Phone number *
            </h2>
            <br />
            <input
              type="text"
              placeholder="Мой ответ"
              className="ticket_block_bottom_input"
            />
          </div>
          <div className="ticket_block_botton">
            <h2 className="ticket_block_bottom_title">
              Please select one of the following option: *
            </h2>
            <br />
            <p className="ticket_block_bottom_description">
              How can we help you? Please let us know type of your ticket. It
              will help us a lot!
            </p>
            <br />
            <div className="ticket_block_botton_inner">
              <input id="check1" type="radio" name="help" />
              <label htmlFor="check1">
                It's bug, error so something is not working as its expected to
                be
              </label>
            </div>
            <div className="ticket_block_botton_inner">
              <input id="check2" type="radio" name="help" />
              <label htmlFor="check2">
                New feature, would be good if you add this
              </label>
            </div>
            <div className="ticket_block_botton_inner">
              <input id="check3" type="radio" name="help" />
              <label htmlFor="check3">I don't know</label>
            </div>
            <div className="ticket_block_botton_inner">
              <input id="check4" type="radio" name="help" />
              <label htmlFor="check4">Другое:</label>
              <input type="text" id="check4" className="checkbox_in" />
            </div>
          </div>
          <div className="ticket_block_botton">
            <h2 className="ticket_block_bottom_title">
              Now, let us know about an issue? What is not working?
            </h2>
            <br />
            <p className="ticket_block_bottom_description">
              Please this is final information we need. What is a problem? How
              do you think it should look like? Give us as much info as
              possible.
            </p>
            <br />
            <input
              type="text"
              placeholder="Мой ответ"
              className="ticket_block_bottom_input"
            />
          </div>
          <button className="tickent_btn">Отправить</button>
        </form>
      </div>
    );
}
 
export default Ticket;