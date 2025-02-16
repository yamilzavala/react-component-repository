import "./styles.css";

export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const pass = formData.get("password");
    const confirmPass = formData.get("confirm-password");

    if (pass !== confirmPass) {
      alert("Invalid password");
    }

    try {
      const res = await fetch(
        "https://www.greatfrontend.com/api/questions/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.get("username"),
            email: formData.get("email"),
            password: pass,
            password_confirm: confirmPass,
          }),
        }
      );

      const { message } = await res.json();
      alert(message);
    } catch (_) {
      alert("Error submitting form!");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <label htmlFor="username">User name: </label>
          <input
            name="username"
            id="username"
            type="text"
            required
            minlength={4}
            pattern="^[a-zA-Z0-9]+$"
          />
        </div>

        <div className="section">
          <label htmlFor="email">Email: </label>
          <input name="email" id="email" type="email" required />
        </div>

        <div className="section">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            required
            minlength={6}
          />
        </div>

        <div className="section">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            name="confirm-password"
            id="confirm-password"
            type="password"
            required
            minlength={6}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
