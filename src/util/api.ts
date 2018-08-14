import { ISpecName, ISpecValue } from "./index";
import { RGB } from "@/util/ColorSpace";

const API_ENDPOINT = "https://ultraspectrum.azurewebsites.net/api";

export async function getSpecByName(name: string): Promise<ISpecValue> {
  const result = await fetch(`${API_ENDPOINT}/GetSpectrum?name=${name}`);
  const jsonResponse = await result.json();
  return jsonResponse;
}

export async function getAllNames(): Promise<string[]> {
  const response = await fetch(`${API_ENDPOINT}/AllSpectrum`);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function findRGBMatch(rgb: RGB): Promise<ISpecValue> {
  const result = await fetch(
    `${API_ENDPOINT}/RGB2Spectrum?r=${rgb.r}&g=${rgb.g}&b=${rgb.b}`
  );
  const jsonResponse = await result.json();
  return jsonResponse;
}
