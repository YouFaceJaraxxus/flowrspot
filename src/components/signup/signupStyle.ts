import { styled } from '@mui/material/styles';

export interface IDoubleInputWrapper {
  width?: string;
}


export const DoubleInputWrapper = styled('div')<IDoubleInputWrapper>(({ width }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: 'auto',
  width: width ?? '100%',
}));