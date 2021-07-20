export default function Form() {
  return (
    <form>
      <section className="form contact-form">
        <h1 className="form__title">Contact Us</h1>
        <div className="form__control">
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name" required />
        </div>
        <div className="form__control">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" required />
        </div>
        <div className="form__control">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" required />
        </div>
        <button className="button button--primary">Submit</button>
      </section>
    </form>
  );
}
