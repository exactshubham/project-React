import React, { useState } from 'react';
import './Form.css'
function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName === '' || lastName === '' || gender === '' || country === '' || profilePicture.length === '') {
      alert('All fields are required');
      return;
    }
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Gender: ' + gender);
    console.log('Country: ' + country);
    console.log('Marketing Emails: ' + marketingEmails);
    console.log('Profile Picture: ' + profilePicture);
    alert('Form Submitted Successfully')
  }

  return (
    <div className='registrationForm'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label><br />
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      /><br />
      <label htmlFor="lastName">Last Name:</label><br />
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      /><br />
      <label htmlFor="gender">Gender:</label><br />
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={event => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label><br />
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={event => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label><br />
      <input
        type="radio"
        id="other"
        name="gender"
        value="other"
        checked={gender === 'other'}
        onChange={event => setGender(event.target.value)}
      />
      <label htmlFor="other">Other</label><br /><br />
      <label htmlFor="country">Country:</label><br />
      <select
        id="country"
        value={country}
        onChange={event => setCountry(event.target.value)}
      >
        <option value="India">India</option>
        <option value="Russia">Russia</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
        <option value="Ukraine">Ukraine</option>
      </select><br />

      <label htmlFor="marketingEmails">
        <input
          type="checkbox"
          id="marketingEmails"
          value="yes"
          checked={marketingEmails}
          onChange={event => setMarketingEmails(event.target.checked)}
        />
        Would you like to receive marketing emails?
      </label><br />
      <label htmlFor="profilePicture">Profile Picture:</label><br />
      <input
        type="file"
        id="profilePicture"
        value={profilePicture}
        onChange={event => setProfilePicture(event.target.value)}
      /><br /><br />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default RegistrationForm