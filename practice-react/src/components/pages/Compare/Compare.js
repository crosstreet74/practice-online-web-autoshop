import React from 'react';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Bread from '../../elements/ui/Bread'
import CompareTable from '../../elements/ui/CompareTable'

export default function Compare() {
    return (
        <>
            <Header />
            <Bread breadName="Compare" />
            <CompareTable />
            <Footer />
        </>
    );
}