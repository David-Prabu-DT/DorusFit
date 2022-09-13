import React, { FormEvent } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";

const SignIn: React.FC = () => {
  const signIn = useSignIn();
  const signOut = useSignOut();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post("/api/login", formData).then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            token: res.data.token,
            expiresIn: res.data.expiresIn,
            tokenType: "Bearer",
            authState: res.data.authUserState,
            refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
            refreshTokenExpireIn: res.data.refreshTokenExpireIn,
          })
        ) {
          // Only if you are using refreshToken feature
          // Redirect or do-something
        } else {
          //Throw error
        }
      }
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type={"email"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type={"password"}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button>Submit</button>
      </form>

      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
};

export default SignIn;
