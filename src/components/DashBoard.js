import React from 'react';
import CelebrityList from './CelebrityList';
import CelebrityFilter from './CelebrityFilter';

const DashBoard = () => (
    <div>
 <table className="centered-table"  border="1">

 <CelebrityFilter />

    <table width="350" border="1">



        <CelebrityList />

                        </table>

             </table>
    </div>
);

export default DashBoard;