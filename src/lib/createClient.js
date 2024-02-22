import * as contentful from "contentful";

import { ACCESS_TOKEN, SPACE_ID } from "../constants";

export const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});