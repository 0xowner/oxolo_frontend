import Header from '../component/Header.component';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PageLayout from '../component/PageLayout.component';
const columns: GridColDef[] = [
  { field: 'text', headerName: 'Text', width: 300 },
  { field: 'timeStamp', headerName: 'TimeStamp', width: 130 },
  { field: 'position', headerName: 'Position', width: 130 },
];

export default function Logs() {
  return (
    <PageLayout>
      <Header text='Erorr logs for Admin User' />
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={[
            {
              id: 1,
              text: 'hello world',
              timeStamp: 'timestamp',
              position: 'position',
            },
          ]}
          columns={columns}
          checkboxSelection
        />
      </div>
    </PageLayout>
  );
}
