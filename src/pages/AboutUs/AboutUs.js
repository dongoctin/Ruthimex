import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CoreValue from './Corevalue';
import ManagerTeam from './Managerteam';
import Layout from '../../layout/Layout';
import History from './History';
import BranchSystems from './BranchSysems';

export default function AboutUs() {
    return (

        <Routes path='/' element={<Layout />}>
            <Route path='/corevalue' element={<CoreValue />} />
            <Route path='/managerteam' element={<ManagerTeam />} />
            <Route path='/history' element={<History />} />
            <Route path='/branchsystems' element={<BranchSystems />} />

        </Routes>


    );
}
