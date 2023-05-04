const API = {
    makePayment: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const success = Math.random() > 0.5;
      return { success };
    },
  };
  
  export default API;
  