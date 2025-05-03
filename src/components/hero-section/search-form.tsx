import { Search } from "lucide-react";
import Form from "next/form";
import ResetFormButton from "./reset-form-button";
import { Button } from "../ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form"
      id="search-form"
    >
      <input
        type="text"
        name="query"
        defaultValue={query || ""}
        placeholder="Search Startups"
        className="outline-0 search-input"
        id="search-input"
      />
      <div className="flex justify-center items-center gap-2">
        {query && <ResetFormButton />}
        <Button
          type="submit"
          className="p-3 rounded-full text-white search-btn"
          aria-label="Submit search"
        >
          <Search />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
