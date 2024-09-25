import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/cryptoContext'
import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem',
};

const AppContent = () => {
    const { assets, crypto } = useCrypto()

    const cryptoPriceMap = crypto.reduce((acc, c) => {
        acc[c.id] = c.price
        return acc
    }, {})

    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title style={{ textAlign: 'left', color: '#fff' }} level={3}>
                Portfolio: {assets.map(asset => {
                    return asset.amount * cryptoPriceMap[asset.id]
                }).reduce((acc, v) => (acc += v), 0).toFixed(2)}
                $
            </Typography.Title>
            <PortfolioChart></PortfolioChart>
            <AssetsTable></AssetsTable>
        </Layout.Content>
    );
}

export default AppContent;