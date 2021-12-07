import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Image from 'next/image';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Head from 'next/head';
import React from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/images/background3_phone.jpg';
import Navigation from '../components/Navigation';
import tableData from '../constants/shows';
import { useTranslation } from '../languages';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
`;

const GalleryWrapper = styled.div`
  overflow-x: scroll;
  max-width: 100%;
  flex: 1;
  height: 100vh;
  margin: auto;
  padding: 10px;
  z-index: 1;
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

  const showData = useMemo(() => {
    return tableData.reverse();
  }, [tableData]);

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Shows</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jozef Bobo Kavecansky" />
        <meta name="description" content="DJ Ondrash's shows and concerts." />
      </Head>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
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
              {showData.map((row) => (
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
