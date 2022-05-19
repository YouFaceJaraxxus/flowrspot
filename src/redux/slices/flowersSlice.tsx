import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IFlower from '../../models/flower/flower';
import { flowersHttpService as flowersService } from '../../service/flowersService/flowersHttpService';
import { IGetFlowersResponse } from '../../service/interfaces/flowersService';

interface FlowersState {
  flowers: IFlower[] | undefined;
  fetchingFlowers: boolean;
}

const initialState: FlowersState = {
  flowers: undefined,
  fetchingFlowers: false,
};

export const getFlowersAsync = createAsyncThunk(
  'flowers/getFlowers',
  async (): Promise<IGetFlowersResponse> => {
    const response = await flowersService.getAllFlowers();
    return response;
  },
);


const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFlowersAsync.pending, (state) => {
        state.fetchingFlowers = true;
      })
      .addCase(getFlowersAsync.fulfilled, (state, action) => {
        state.flowers = action.payload.flowers;
        state.fetchingFlowers = false;
      })
      .addCase(getFlowersAsync.rejected, (state) => {
        state.fetchingFlowers = false;
      })
  },
});

export default flowersSlice.reducer;
