import React, {useState} from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d2f0f11a-d8df-4406-a45d-6ca12ba521a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
// after a 3 secound of form submiting msg will be hide 
      setTimeout(() => {
        setResult(' ');
      }, 3000);

  };

  return (
    <section className='container contact-section'>
      <h2 className='container-title'>Contact Us</h2>
      <div className="contact-wrapper">
        <form  onSubmit={onSubmit} className='contact-form'>
          <input
            type="text"
            className='form-control'
            name='username'
            placeholder='Enter your name'
            autoComplete='off'
            required
          />
          <input
            type="email"
            className='form-control'
            name='email'
            placeholder='Enter your email'
            autoComplete='off'
            required
          />

          <textarea
            name="message"
            rows='4'
            className='form-control'
            placeholder='Enter your message'
            autoComplete='on'
          ></textarea>
          <button type='submit' className='button w-4'>send</button>
          <p className='sending-msg'>{result}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
