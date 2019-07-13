/** @jsx jsx */

import * as React from "react";
//import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableColumnResizing
} from "@devexpress/dx-react-grid-bootstrap4";
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';
import useFormFetcher from "../hooks/UseFormFetcher";
import {
  SortingState,
  Sorting,
  IntegratedSorting,
  TableColumnWidthInfo
} from "@devexpress/dx-react-grid";
import { jsx } from "@emotion/core";
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

const columns = [
  { name: "DocID", title: "ID" },
  { name: "DocType", title: "Type" },
  { name: "Name", title: "Name" },
  { name: "DocNumber", title: "Number" },
  { name: "Edition", title: "Edition" }
];

const initialColumnWidths = [
  { columnName: "DocID", width: 90 },
  { columnName: "DocType", width: 130 },
  { columnName: "Name", width: 200 },
  { columnName: "DocNumber", width: 210 },
  { columnName: "Edition", width: 140 }
];

const MyGrid: React.SFC = () => {
  const [sorting, setSorting] = React.useState<Array<Sorting>>([
    { columnName: "DocNumber", direction: "asc" }
  ]);
  const [columnWidths, setColumnWidths] = React.useState<
    Array<TableColumnWidthInfo>
  >(initialColumnWidths);
  const { forms, error, isLoading } = useFormFetcher(
    "http://localhost:3230/formslibrary/api/catalogs/find/forms/table"
  );

  if (error) {
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
            <Grid rows={forms} columns={columns}>
              <SortingState sorting={sorting} onSortingChange={setSorting} />
              <IntegratedSorting />
              <Table tableComponent={TableComponent} />
              <TableColumnResizing
                columnWidths={columnWidths}
                onColumnWidthsChange={setColumnWidths}
              />
              <TableHeaderRow showSortingControls />
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyGrid;
