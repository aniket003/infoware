import React from 'react'
import TableHeaderRow from './tbhead'
import TableRow from './tbrow'
import styles from './table.module.css'
const Table=(props)=>{

    return(
        <div >
            <table className={styles.tables}>
            <TableHeaderRow />
            <TableRow {...props} />
            </table>

        </div>
    )
}
export default Table