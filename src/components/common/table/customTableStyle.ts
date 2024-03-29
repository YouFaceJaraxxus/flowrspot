import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ITableItem{
  color?: string;
  bgcolor?: string;
}
export const TableHeaderCell = styled(TableCell)(() => ({
  fontWeight: 'bolder',
}));

export const TableItemText = styled('div')<ITableItem>(({theme, color, bgcolor}) => ({
  textAlign: 'center',
  color: color?? theme.palette.common.black,
  backgroundColor: bgcolor?? theme.palette.common.white,
}));

export const TableItemButton = styled('div')<ITableItem>(({theme, color, bgcolor}) => ({
  display: 'inline-block',
  textAlign: 'center',
  color: color?? theme.palette.common.black,
  backgroundColor: bgcolor?? theme.palette.common.white,
  margin: '0',
  padding: '5px 10px',
  borderRadius: '3px',
  cursor: 'pointer',
  '&:hover':{
    opacity: '0.8',
  }
}));

export const PaginationWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
}));

export const NoContentCell = styled(TableCell)(() => ({
  textAlign: 'center',
  fontWeight: 'bolder',
  fontSize: '2em',
  padding: '100px 0',
  wordBreak: 'break-word',
}));