
import React, { Component } from 'react';
import ReactTable from 'react-table';

class Mytable extends Component {
    render() {


        const tableData = []

        const col = [{Header:"name" , accessor:" "},{Header:"name", accessor:" "}]


        return (
            <div>

                <ReactTable
                            data = {tableData}
                            colomns ={col}
                            defaultPageSizer= {2}
                            pageSizeOptions={[2,4,6,8,10]}       
                />

            </div>
        );
    }
}

export default Mytable;
