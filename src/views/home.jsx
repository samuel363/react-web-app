import React from 'react';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Label, LoadingSpinner, ViewContainer } from '@/components';
import { getBooking, logout } from '@/redux/action';
import getSelector from '@/redux/selectors';
import {
  bookings, loadingBookins,
  token,
  email,
} from '@/redux/selectors/selectorsKeys';
import { Redirect } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const tokenLogin = useSelector((state) => getSelector(state, token));
  const adminemail = useSelector((state) => getSelector(state, email));
  const bookinsList = useSelector((state) => getSelector(state, bookings));
  const bookingLoading = useSelector((state) => getSelector(state, loadingBookins));
  React.useEffect(() => {
    if (!bookinsList && tokenLogin) {
      dispatch(getBooking({ adminemail, token: tokenLogin }));
    }
  });
  const values = bookinsList;
  const columns = ['bookingId', 'bookingTime', 'streetAddress', 'bookingPrice', 'client'].map((item) => (
    {
      key: item,
      name: item,
      label: <span className="title-header"><Label id={item} /></span>,
      options: {
        filter: item === 'bookingId' || item === 'bookingPrice',
        sort: false,
      },
    }
  ));
  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          fontSize: '1.2rem',
        },
      },
    },
  });
  const options = {
    filterType: 'multiselect',
    print: false,
    download: false,
    viewColumns: false,
    searchText: '',
    searchPlaceholder: '',
    pagination: false,
    textLabels: {
      body: {
        noMatch: <span className="title-tooltip"><Label id="table.nomatch" /></span>,
      },
      toolbar: {
        search: <span className="title-tooltip"><Label id="table.search" /></span>,
        filterTable: <span className="title-tooltip"><Label id="table.filters" /></span>,
      },
      filter: {
        title: <span className="title-tooltip"><Label id="table.filters.title" /></span>,
        reset: <span className="title-tooltip"><Label id="table.filters.reset" /></span>,
      },
    },
  };
  const logOut = () => {
    sessionStorage.clear();
    dispatch(logout());
  };
  if (!tokenLogin) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <ViewContainer>
      {!bookingLoading
        ? (
          <>
            <button
              className="logout-btn"
              type="button"
              onClick={logOut}
            >
              <Label id="logout" />
            </button>
            <MuiThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={(
                  <span className="title-table">
                    <Label id="table.title" />
                  </span>
                )}
                data={values}
                columns={columns}
                options={options}
              />
            </MuiThemeProvider>
          </>
        )
        : <LoadingSpinner />}
    </ViewContainer>
  );
};
export default Home;
