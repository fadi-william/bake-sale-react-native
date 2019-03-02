import React from "react";
import { StyleSheet, TextInput } from "react-native";
import debounce from "lodash.debounce";

interface ISearchBarProps {
  onSearch: (searchTerm: string) => void;
}

class SearchBar extends React.Component<ISearchBarProps> {
  state = {
    searchTerm: ""
  };

  debouncedSearchDeals = debounce(this.props.onSearch, 300);

  handleChange = (searchTerm: string) => {
    this.setState(
      {
        searchTerm
      },
      () => {
        // debounce the operation when searching.
        this.debouncedSearchDeals(searchTerm);
      }
    );
  };

  render() {
    return (
      <TextInput
        placeholder={"Search all deals"}
        onChangeText={this.handleChange}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12
  }
});

export default SearchBar;
