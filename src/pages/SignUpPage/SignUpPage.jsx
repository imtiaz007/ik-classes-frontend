/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from '@src/helpers/axios';
import allCountries from '@src/helpers/countryList';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [whatsappConsent, setWhatsappConsent] = React.useState(false);
  const [emailConsent, setEmailConsent] = React.useState(false);

  const handleSubmit = () => {
    if (!username || !email || !phone || !password || !country) {
      toast.error('Please fill in the required details');
      return;
    }
    axios
      .post('/auth/local/register', {
        username,
        email,
        phone,
        password,
        country,
        whatsappConsent,
        emailConsent,
        confirmed: false,
        blocked: false,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // navigate to a diff page, that says verify email
          toast.success('Sucess! Verification link sent to email');
        }
      })
      .catch((error) => {
        const errMessage = `${error.response.data.message[0].messages[0].message}`;
        toast.error(errMessage);
      });
  };
  return (
    <div className="flex flex-col items-center p-10 mb-10 mx-auto w-full md:w-1/3 h-screen">
      <div className="space-y-7">
        <p className="text-lg text-gray-600 font-semibold">
          Sign up for a <span className="text-blue-400">free</span> Demo
        </p>
        <input
          type="text"
          name="username"
          id="name"
          placeholder="Name"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-gray-300 rounded-lg shadow-md w-full"
        />
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-gray-300 rounded-lg shadow-md w-full"
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-gray-300 rounded-lg shadow-md w-full"
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone with country code"
          className="border-gray-300 rounded-lg shadow-md w-full"
        />
        <select
          name="country"
          id="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          className="border-gray-300 text-gray-500 rounded-lg shadow-md w-full"
        >
          <option value="null" className="text-red-400">
            Please Select your country
          </option>
          {Object.keys(allCountries).map((keyName) => (
            <option key={keyName} value={keyName}>
              {keyName}
            </option>
          ))}
        </select>
      </div>
      <div className="my-7 space-y-1 w-full">
        <div className="w-full">
          <input
            type="checkbox"
            name="whatsapp-permission"
            id="whatsapp-permission"
            className="rounded-sm"
            value={whatsappConsent}
            onClick={() => setWhatsappConsent(!whatsappConsent)}
          />
          <label
            htmlFor="whatsapp-permission"
            className="ml-2 text-gray-400 align-middle"
          >
            Recieve updates on Whatsapp
          </label>
        </div>
        <div className="w-full">
          <input
            type="checkbox"
            name="email-permission"
            id="email-permission"
            className="rounded-sm"
            value={emailConsent}
            onClick={() => setEmailConsent(!emailConsent)}
          />
          <label
            htmlFor="email-permission"
            className="ml-2 text-gray-400 align-middle"
          >
            Recieve updates through email
          </label>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full p-3 rounded-lg capitalize bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 transition duration-400 focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default SignUpPage;
