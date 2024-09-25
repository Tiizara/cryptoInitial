import { Layout, Card, Statistic, List, Typography, Tag, Switch } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize } from '../../utils';
import { useContext, useState } from 'react';
import CryptoContext from '../../context/cryptoContext';

const siderStyle = {
    padding: '1rem',
};

export default function AppSider() {
    const [disabled, setDisabled] = useState(true);
    const { assets } = useContext(CryptoContext)

    const onChange = () => {
        setDisabled(!disabled)
    };

    return (
        <Layout.Sider width="25%" style={siderStyle} >
            <div style={{backgroundColor: 'white', borderRadius: '13px', marginBottom: '1rem', width: '42px'}}>
            <Switch onChange={onChange}></Switch>
            </div>
            {assets.map((asset) => (
                <Card key={asset.id} style={{ marginBottom: '1rem' }}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />
                    <List style={{ display: disabled ? 'flex' : 'none' }}
                        size='small'
                        dataSource={[
                            { title: 'Total Profit', value: asset.totalProfit, withTag: true },
                            { title: 'Asset Amount', value: asset.amount, isPlain: true },
                            // { title: 'Total Profit', value: asset.growPercent },

                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>
                                    {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
                                    {item.isPlain && item.value}
                                    {!item.isPlain && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value.toFixed(2)}$</Typography.Text>}
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    )
}