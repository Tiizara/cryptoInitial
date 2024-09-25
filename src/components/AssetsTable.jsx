import { Table } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/cryptoContext";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Price, $',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.amount - b.amount,
    }
];

const AssetsTable = () => {
    const {assets} = useCrypto()
    const data = assets.map(a => ({
        key: a.id,
        name: a.name,
        price: a.price,
        amount: a.amount
    }))

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
}

export default AssetsTable;