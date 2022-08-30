import { EffectCallback, useLayoutEffect } from 'react'

function useEffectOnce(effect: EffectCallback) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useLayoutEffect(effect, [])
}

export default useEffectOnce