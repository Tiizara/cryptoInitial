import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/cryptoContext';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

export default function AppHeader() {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [coin, setCoin] = useState(null)
    const [drawer, setDrawer] = useState(false)
    const { crypto } = useCrypto()

    useEffect(() => {
        const keypress = event => {
            if (event.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])

    function handleSelect(value) {
        setModal(true)
        setCoin(crypto.find((c) => c.id === value))
    }

    return <Layout.Header style={headerStyle}>
        <Select
            style={{
                width: 200,
            }}
            open={select}
            onSelect={handleSelect}
            onClick={() => setSelect((prev) => !prev)}
            value='press / to open'
            options={crypto.map(coin => ({
                label: coin.name,
                value: coin.id,
                icon: coin.icon
            }))}
            optionRender={(option) => (
                <Space>
                    <img
                        style={{ width: 20 }}
                        src={option.data.icon}
                        alt={option.data.value}>
                    </img>
                    {option.data.label}
                </Space>
            )}
        />
        <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>

        <Modal
            open={modal}
            footer={null}
            onCancel={() => setModal(false)}>
            <CoinInfoModal coin={coin}></CoinInfoModal>
        </Modal>

        <Drawer width={600}
            title="Add Asset"
            onClose={() => setDrawer(false)}
            open={drawer}
            destroyOnClose
            >
            <AddAssetForm onClose={() => setDrawer(false)}></AddAssetForm>
        </Drawer>

    </Layout.Header>
}