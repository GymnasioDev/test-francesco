import { URL } from "../config/constants";

async function getCompany(company) {
    try {
      const requestObject = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
      };
  
      const response = await fetch(URL + "companies/" + company, requestObject);
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        // Se la risposta non è ok, gestisci l'errore
        throw new Error("Errore nella richiesta");
      }
    } catch (error) {
      // Gestisci l'errore qui
      console.error(error);
      throw error; // Puoi anche lanciare l'errore per gestirlo più avanti, se necessario
    }
  }

 async function getCompanies() {
    try {
      const requestObject = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
      };
  
      const response = await fetch(URL + "companies" , requestObject);
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        // Se la risposta non è ok, gestisci l'errore
        throw new Error("Errore nella richiesta");
      }
    } catch (error) {
      // Gestisci l'errore qui
      console.error(error);
      throw error; // Puoi anche lanciare l'errore per gestirlo più avanti, se necessario
    }
  }

  async function createCompany(company) {
    try {
      const requestObject = {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(company),
      };
  
      const response = await fetch(URL + "companies", requestObject);
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        // Se la risposta non è ok, gestisci l'errore
        throw new Error("Errore nella richiesta");
      }
    } catch (error) {
      // Gestisci l'errore qui
      console.error(error);
      throw error; // Puoi anche lanciare l'errore per gestirlo più avanti, se necessario
    }
  }

  export {
    getCompanies,
    getCompany,
    createCompany
  };