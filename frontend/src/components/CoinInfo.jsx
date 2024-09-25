import { Flex, Typography } from "antd";
const CoinInfo = ({ coin, withSymbol }) => {
    return (
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{ width: 40, marginRight: 10 }} />
            <Typography.Title level={2} style={{ margin: 0 }}>
                {withSymbol && `(${coin.symbol})`} {coin.name}
            </Typography.Title>
        </Flex>
    );
}

export default CoinInfo;