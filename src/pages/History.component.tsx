import { Alert } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import Header from '../component/Header.component';
import PageLayout from '../component/PageLayout.component';
const columns: GridColDef[] = [
  { field: 'timeStamp', headerName: 'TimeStamp', width: 200 },
  { field: 'text', headerName: 'Text', width: 500 },
  {
    field: 'position',
    headerName: 'Position',
    width: 130,
    valueGetter: (param: any) => {
      console.log(param);
      return `[${param.value.x},${param.value.y}]`;
    },
  },
];

export default function History() {
  const { data } = useQuery({
    queryKey: ['history'],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_Oxolo_BackEnd}/info/all`)
        .then((res) => res.json())
        .then((res) => res.data),
  });
  return (
    <PageLayout>
      <Header text={'Text Element History'} />
      <div style={{ height: 500, width: '100%' }}>
        <Content rows={data} />
      </div>
    </PageLayout>
  );
}
const Content = ({ rows }: { rows: any[] }) => {
  return (
    <>
      {rows && rows.length > 0 ? (
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          getRowId={(e) => e.timeStamp}
        />
      ) : (
        <Alert severity='info'>No data to Display</Alert>
      )}
    </>
  );
};
