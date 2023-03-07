import Header from '../component/Header.component';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PageLayout from '../component/PageLayout.component';
import { useQuery } from '@tanstack/react-query';
import { Alert } from '@mui/material';
const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 180 },
  { field: 'message', headerName: 'Message', width: 300 },
];

export default function Logs() {
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_Oxolo_BackEnd}/logs`)
        .then((res) => res.json())
        .then((res) => res.data),
  });

  return (
    <PageLayout>
      <Header text='Erorr logs for Admin User' />
      <div style={{ height: 500, width: '100%' }}>
        <Content rows={data} />
      </div>
    </PageLayout>
  );
}

const Content = ({ rows }: { rows: any[] }) => {
  return (
    <>
      {rows ? (
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          getRowId={(e) => e.date}
        />
      ) : (
        <Alert severity='info'>No data to Display</Alert>
      )}
    </>
  );
};
