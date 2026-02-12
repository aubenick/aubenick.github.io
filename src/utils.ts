import scryfall from "scryfall-client";
import Card from "scryfall-client/dist/models/card";
import * as fs from "fs";
import * as path from "path";
import axios from "axios";
import { PlanarCard } from "./types.js";
import cardData from "../public/data/cardData.json";

export function newDeck() {
  const cards = cardData as PlanarCard[];
  const randomCards = cards.sort(() => 0.5 - Math.random());
  console.log("newDeck()");
  return randomCards;
}

scryfall.setUserAgent("MyPackage/1.2.3");

export async function scryfallApiGetPlanarCards() {
  const query = "is:planar -border:gold -s:punk -is:ub";
  const list = await scryfall.search(query);
  const name = list.map((card: Card) => card.name);

  const data: PlanarCard[] = list.map((card: Card) => ({
    name: card.name,
    oracleText: card.oracle_text || "",
    typeLine: card.type_line,
    imageName: card.name + ".png",
    specialActions: false,
  }));

  const dataString = JSON.stringify(data, null, 2);
  console.log(dataString);

  const filePath = "./cardData.json";

  // Pipe the response data (stream) to a local file
  fs.writeFile(filePath, dataString, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Successfully wrote JSON data to ${filePath}`);
    }
  });

  return {
    query: query,
    total: list.total_cards,
    names: name,
  };
}

const downloadImage = async (url: string, filepath: string): Promise<void> => {
  try {
    // Request the image as a stream
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    // Pipe the response data (stream) to a local file
    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);

    // Return a promise that resolves when the download is complete or rejects on error
    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    console.error("Error downloading the image:", error);
    throw error;
  }
};
