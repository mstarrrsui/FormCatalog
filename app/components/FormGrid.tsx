import * as React from "react";
//import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  DragDropProvider,
  Toolbar,
  GroupingPanel,
  TableFilterRow
} from "@devexpress/dx-react-grid-bootstrap4";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';
import useFormFetcher from "../hooks/UseFormFetcher";
import {
  SortingState,
  Sorting,
  IntegratedSorting,
  IntegratedGrouping,
  GroupingState,
  Grouping,
  FilteringState,
  IntegratedFiltering,
  Filter
} from "@devexpress/dx-react-grid";

const MyGrid = () => {
  const [sorting, setSorting] = React.useState<Array<Sorting>>([
    { columnName: "DocNumber", direction: "asc" }
  ]);
  const [grouping, setGrouping] = React.useState<Array<Grouping>>([
    { columnName: "DocType" }
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
      <span>{message}</span>
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
        <IntegratedGrouping />
        <Table />
        <TableHeaderRow showSortingControls showGroupingControls />
        <TableFilterRow />
        <Toolbar />
      </Grid>
    </React.Fragment>
  );
};

export default MyGrid;
