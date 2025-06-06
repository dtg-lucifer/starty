import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
  *[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    description,
    pitch,
    image,
    slug,
    views,
    author -> {
      _id,
      name,
      email,
      username,
      image,
      bio
    }
  }
`);

export const STARTUP_QUERY_URL = new URL(
  "https://jtydenfm.api.sanity.io/v2025-05-03/data/query/production?query=*%5B_type+%3D%3D+%22startup%22+%26%26+defined%28slug.current%29%5D+%7C+order%28_createdAt+desc%29+%7B%0A++_id%2C%0A++id%2C%0A++title%2C%0A++description%2C%0A++pitch%2C%0A++image%2C%0A++slug%2C%0A++views%2C%0A++author+-%3E+%7B%0A++++_id%2C%0A++++id%2C%0A++++name%2C%0A++++email%2C%0A++++username%2C%0A++++image%2C%0A++++bio%0A++%7D%0A%7D&perspective=published",
);
