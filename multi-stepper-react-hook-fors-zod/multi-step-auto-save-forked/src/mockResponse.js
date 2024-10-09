const resp1 = {
  firstName: "yamil",
  lastName: "zavala",
  email: "zavalayamil@gmail.com",
  phoneNumber: "+543515637798",
};
const resp2 = {
  firstName: "silvina",
  lastName: "lemme",
  email: "sil@gmail.com",
  phoneNumber: "+543543874722",
};

export const mockResponse = (id) => {
  console.log("id: ", id);
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === 1) {
        resolve(resp1);
      } else {
        resolve(resp2);
      }
    }, 1000);
  });
};
