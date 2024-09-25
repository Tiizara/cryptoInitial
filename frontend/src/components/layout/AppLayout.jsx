import { Layout, Spin, Switch } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/cryptoContext';


export default function AppLayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
        return <Spin fullscreen></Spin>
    }
    return (
        <Layout>
            <AppHeader></AppHeader>
            <Layout>
                <AppSider></AppSider>
                <AppContent></AppContent>
            </Layout>
        </Layout>
    )
}