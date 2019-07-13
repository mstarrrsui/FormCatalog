/** @jsx jsx */

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
import { css, jsx } from "@emotion/core";
import Spinner from "./Spinner";
import styled from "@emotion/styled";

const StyledSearchInput = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledTable = styled(Table.Table)`
  .form-control {
    height: calc(1em + 0.75rem + 2px);
  }
`;
const TableComponent = ({ ...restProps }) => (
  <StyledTable {...restProps} className="table-sm" />
);

const MyGrid = () => {
  const [sorting, setSorting] = React.useState<Array<Sorting>>([
    { columnName: "DocNumber", direction: "asc" }
  ]);
  const [filters, setFilters] = React.useState<Array<Filter>>();
  const { forms, error, isLoading } = useFormFetcher(
    "http://localhost:3230/formslibrary/api/catalogs/find/forms/table/75"
  );

  let message = "";
  if (error) {
    message = `Error: ${error.message}`;
  }

  return (
    <React.Fragment>
      <Spinner loading={isLoading} />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <StyledSearchInput
              type="text"
              className="form-control"
              data-placeholder="Start Typing a Form's Name or Doc Number"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
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
              <Table tableComponent={TableComponent} />
              <TableHeaderRow showSortingControls />
              <TableFilterRow showFilterSelector />
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyGrid;
