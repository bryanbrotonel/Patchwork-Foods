import React from 'react';

function SignUp() {
  const [email, setEmail] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  return (
    <div className="mx-8">
      <h1>Sign Up</h1>
      <form className="space-x-4">
        <input
          className="border border-black px-2"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          data-testid="email"
          id="email"
        />
        <input
          className="border border-black px-2"
          value={postalCode}
          placeholder="Postal Code"
          onChange={(event) => setPostalCode(event.target.value)}
          type="text"
          data-testid="postalCode"
        />
      </form>
    </div>
  );
}

export default SignUp;
