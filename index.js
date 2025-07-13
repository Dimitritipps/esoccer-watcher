import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const URL = "https://football.esportsbattle.com/en/";

async function main() {
  try {
    console.log("eSoccer figyelés indul...");

    const response = await axios.get(URL);
    console.log("Oldal betöltve, válasz hossza:", response.data.length);

    // Ide jön később a konkrét adatkinyerés
  } catch (error) {
    console.error("Hiba az oldal lekérésekor:", error.message);
  }
}

main();
