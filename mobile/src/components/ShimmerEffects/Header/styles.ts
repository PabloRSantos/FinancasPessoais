import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const Saldo = styled(ShimmerPlaceHolder)`
    margin-top: 5px;
    width: 115px;
    height: 25px;
    border-radius: 8px;
`
