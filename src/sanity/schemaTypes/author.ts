import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";
import { v4 as uuid } from "uuid";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
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
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "username",
      type: "string",
      title: "Username",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "url",
      title: "Image",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }).required(),
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
      validation: (Rule) => Rule.max(200).warning("Shorter bios are better!"),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
