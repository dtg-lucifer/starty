import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`
  *[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createdAt desc) {
    _id,
    title,
    description,
    pitch,
    image,
    slug,
    views,
    category,
    _createdAt,
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

export const SINGLE_STARTUP_QUERY = defineQuery(`
*[_type == "startup" && _id == $id][0] {
  _id,
  title,
  description,
  pitch,
  image,
  slug,
  views,
  category,
  _createdAt,
  author -> {
    _id,
    name,
    username,
    image,
    bio
  }
}
`);

export const STARTUP_VIEWS_QUERY = defineQuery(`
    *[_type == "startup" && _id == $id][0]{
        _id, views
    }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
  *[_type == "author" && id == $id][0] {
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }
`);
