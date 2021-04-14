import { StandardLocalization } from "../LocalizationInterfaces";
import { addon } from "./addon";
import { tester } from "./heroes/tester";
import { warder } from "./heroes/warder";

export const standards: StandardLocalization[] = [...addon, ...tester, ...warder];
