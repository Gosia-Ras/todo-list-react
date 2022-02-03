import Input from "../Input/index";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useNewQueryParameter } from "../queryParams";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useNewQueryParameter();

  const OnInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={OnInputChange}
      />
    </Wrapper>
  );
};

export default Search;
