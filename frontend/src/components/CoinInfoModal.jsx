import { Divider, Flex, Tag, Typography } from "antd";
import CoinInfo from "./CoinInfo";

const CoinInfoModal = ({ coin }) => {
    return (
        <>
            <CoinInfo coin={coin} withSymbol></CoinInfo>
            <Divider />
            <Typography.Paragraph>
                <Typography.Text strong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
                <Typography.Text strong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
                <Typography.Text strong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: </Typography.Text>
                {coin.marketCap}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>ContractAddress: </Typography.Text>
                {coin.contractAddress}
            </Typography.Paragraph>
            <Divider></Divider>
            <Flex justify="space-around">
                <Typography.Link href={coin.redditUrl} target="_blank" strong>Reddit </Typography.Link>
                <Typography.Link href={coin.websiteUrl} target="_blank" strong>Litecoin </Typography.Link>
                <Typography.Link href={coin.twitterUrl} target="_blank" strong>Twitter </Typography.Link>
            </Flex>
        </>
    )
}

export default CoinInfoModal;