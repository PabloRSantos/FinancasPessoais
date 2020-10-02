import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const Container = styled.View`
    flex: 1;
`

export const ContainerFlatList = styled.View`
    width: 100%;
    padding: 0 25px;
`

export const ShimmerEffect = styled(ShimmerPlaceHolder)`
    
`
