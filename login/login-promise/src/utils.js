export function login(email, password) {
  const delay = 1500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!email && password === "123456") {
        resolve();
      } else {
        reject(new Error("invalid credentials"));
      }
    }, delay);
  });
}
