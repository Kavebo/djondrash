import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useTranslation } from '../languages';
import background from '../assets/images/background3_phone.jpg';
import Navigation from '../components/Navigation';
import tableData from '../constants/shows';

const Wrapper = styled.div`
  background: url(${background});
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const GalleryWrapper = styled.div`
  flex: 1;
  height: 100vh;
  margin: auto;
  padding: 10px;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
  cell: {
    color: 'white',
  },
  container: {
    backgroundColor: 'transparent',
  },
});

const Shows = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Shows</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="DJ Ondrash's shows and concerts." />
      </Head>
      <Navigation />
      <GalleryWrapper>
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.cell}>{t('shows_table_date')}</TableCell>
                <TableCell className={classes.cell}>{t('shows_table_name')}</TableCell>
                <TableCell className={classes.cell}>{t('shows_table_place')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className={classes.cell} component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell className={classes.cell}>{row.name}</TableCell>
                  <TableCell className={classes.cell}>{row.place}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GalleryWrapper>
    </Wrapper>
  );
};

export default Shows;
