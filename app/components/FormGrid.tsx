import * as React from "react";
//import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
  Grid,
  Table,
  TableHeaderRow,
  DragDropProvider,
  Toolbar,
  TableFilterRow
} from "@devexpress/dx-react-grid-bootstrap4";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';
import useFormFetcher from "../hooks/UseFormFetcher";
import {
  SortingState,
  Sorting,
  IntegratedSorting,
  IntegratedGrouping,
  FilteringState,
  IntegratedFiltering,
  Filter
} from "@devexpress/dx-react-grid";
import Spinner from "./Spinner";

const MyGrid = () => {
  const [sorting, setSorting] = React.useState<Array<Sorting>>([
    { columnName: "DocNumber", direction: "asc" }
  ]);
  const [filters, setFilters] = React.useState<Array<Filter>>();
  const { forms, error, isLoading } = useFormFetcher(
    "http://localhost:3230/formslibrary/api/catalogs/find/forms/table"
  );

  let message = "";
  if (isLoading) {
    message = "Loading.. please wait....";
  } else if (error) {
    message = `Error: ${error.message}`;
  }

  return (
    <React.Fragment>
      <Spinner loading={isLoading} />
      <Grid
        rows={forms}
        columns={[
          { name: "DocID", title: "ID" },
          { name: "DocType", title: "Type" },
          { name: "Name", title: "Name" },
          { name: "DocNumber", title: "Number" },
          { name: "Edition", title: "Edition" }
        ]}
      >
        <DragDropProvider />
        <SortingState sorting={sorting} onSortingChange={setSorting} />
        <FilteringState filters={filters} onFiltersChange={setFilters} />
        <IntegratedFiltering />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
        <TableFilterRow />
      </Grid>
    </React.Fragment>
  );
};

export default MyGrid;
