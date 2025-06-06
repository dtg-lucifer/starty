import { defineField, defineType } from "sanity";
import { v4 as uuid } from "uuid";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID",
      validation: (Rule) => Rule.required(),
      initialValue: () => uuid(),
      readOnly: true,
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .slice(0, 96), // Limit to 96 characters
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "views",
      type: "number",
      title: "Views",
      validation: (Rule) => Rule.min(0).integer(),
      initialValue: 0,
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) =>
        Rule.max(200).warning("Shorter descriptions are better!"),
    }),
    defineField({
      name: "catergory",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(3).max(20).error(
          "Must be between 3 and 20 characters",
        ),
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
    defineField({
      name: "image",
      type: "url",
      title: "Image",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }).required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});
